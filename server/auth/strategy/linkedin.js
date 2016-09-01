import { Strategy } from 'passport-linkedin-oauth2';
import { auth as config } from '../../../config';
import { User } from '../../../data/models';

/* eslint-disable no-underscore-dangle */

export default function LinkedinStrategy(link) {
  return new Strategy({
    clientID: config.linkedin.id,
    clientSecret: config.linkedin.secret,
    callbackURL: `/${link ? 'link' : 'login'}${config.linkedin.callbackURL}`,
    scope: ['r_emailaddress', 'r_basicprofile'],
    passReqToCallback: true,
  }, (req, accessToken, refreshToken, profile, done) => {
    async function loginLinkedin() {
      if (req.user) {
        let user = await User.findById(req.user.id);
        user.profile.linkedin.id = profile.id;
        user.profile.linkedin.link = profile._json.publicProfileUrl;
        user.avatar = user.avatar || profile._json.pictureUrl;
        user.name.value = user.name.value || profile.displayName;
        user = await user.save();
        return done(null, { id: user.id });
      }

      const users = await User.find({
        'profile.linkedin.id': profile.id,
      });

      if (users.length) {
        return done(null, { id: users[0].id });
      }

      const email = profile._json.emailAddress;
      let user;
      if (email) {
        user = await User.findOne({
          email: new RegExp(email, 'i'),
        });

        if (user) {
          user.profile.linkedin.id = profile.id;
          user.profile.linkedin.link = profile._json.publicProfileUrl;
          user.avatar = user.avatar || profile._json.pictureUrl;
          user.name.value = user.name.value || profile.displayName;
          user = await user.save();
          return done(null, { id: user.id });
        }
      }

      user = await createUser(profile);
      return done(null, { id: user.id });
    }

    loginLinkedin().catch(done);
  });
}

async function createUser(profile) {
  let username = profile.displayName.replace(/\s+/g, '');
  let checkUsername = await User.find({ username }).length;
  while (checkUsername) {
    username = profile.displayName.replace(/\s+/g, '') + Math.floor(Math.random() * 10000);
    checkUsername = await User.find({ username }).length;
  }
  return await User.create({
    email: profile._json.emailAddress,
    username,
    avatar: profile._json.pictureUrl,
    'name.value': profile.displayName,
    'profile.linkedin': {
      id: profile.id,
      link: profile._json.publicProfileUrl,
    },
  });
}
