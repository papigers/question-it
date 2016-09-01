import { Strategy } from 'passport-google-oauth20';
import { auth as config } from '../../../config';
import { User } from '../../../data/models';

/* eslint-disable no-underscore-dangle */

export default function GoogleStrategy(link) {
  return new Strategy({
    clientID: config.google.id,
    clientSecret: config.google.secret,
    callbackURL: `/${link ? 'link' : 'login'}${config.google.callbackURL}`,
    passReqToCallback: true,
  }, (req, accessToken, refreshToken, profile, done) => {
    async function loginGoogle() {
      if (req.user) {
        let user = await User.findById(req.user.id);
        user.profile.google.id = profile.id;
        user.profile.google.link = profile._json.url;
        user.avatar = user.avatar || profile._json.image.url;
        user.name.value = user.name.value || profile.displayName;
        user = await user.save();
        return done(null, { id: user.id });
      }

      const users = await User.find({
        'profile.google.id': profile.id,
      });

      if (users.length) {
        return done(null, { id: users[0].id });
      }

      const email = profile._json.emails[0] && profile._json.emails[0].value;
      let user;
      if (email) {
        user = await User.findOne({
          email: new RegExp(email, 'i'),
        });

        if (user) {
          user.profile.google.id = profile.id;
          user.profile.google.link = profile._json.url;
          user.avatar = user.avatar || profile._json.image.url;
          user.name.value = user.name.value || profile.displayName;
          user = await user.save();
          return done(null, { id: user.id });
        }
      }

      user = await createUser(profile);
      return done(null, { id: user.id });
    }

    loginGoogle().catch(done);
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
    email: profile._json.emails[0] && profile._json.emails[0].value,
    username,
    avatar: profile._json.image.url,
    'name.value': profile.displayName,
    'profile.linkedin': {
      id: profile.id,
      link: profile._json.url,
    },
  });
}
