import { Strategy } from 'passport-facebook';
import { auth as config } from '../../../config';
import { User } from '../../../data/models';

/* eslint-disable no-underscore-dangle */


export default function FacebookStrategy(link, reload) {
  let cbUrl = link ? 'link' : 'login';
  cbUrl = reload ? 'reload' : cbUrl;
  return new Strategy({
    clientID: config.facebook.id,
    clientSecret: config.facebook.secret,
    callbackURL: `/${cbUrl}${config.facebook.callbackURL}`,
    profileFields: ['name', 'displayName', 'birthday', 'email', 'link'],
    passReqToCallback: true,
  }, (req, accessToken, refreshToken, profile, done) => {
    async function loginFacebook() {
      if (req.user) {
        let user = await User.findById(req.user.id);
        user.profile.facebook.id = profile.id;
        user.profile.facebook.link = profile._json.link;

        user.avatar = reload ?
          `https://graph.facebook.com/${profile.id}/picture?type=large`
        : user.avatar || `https://graph.facebook.com/${profile.id}/picture?type=large`;

        user.name.value = reload ?
          profile.displayName
        : user.name.value || profile.displayName;

        user.birthDate.value = reload ?
          new Date(profile._json.birthday)
        : user.birthDate.value || new Date(profile._json.birthday);

        user = await user.save();
        return done(null, { id: user.id, href: user.href });
      }

      const users = await User.find({
        'profile.facebook.id': profile.id,
      });

      if (users.length) {
        return done(null, { id: users[0].id, href: users[0].href });
      }

      const email = profile._json.email;
      let user;
      if (email) {
        user = await User.findOne({
          email: new RegExp(email, 'i'),
        });

        if (user) {
          user.profile.facebook.id = profile.id;
          user.profile.facebook.link = profile._json.link;
          user.avatar = user.avatar || `https://graph.facebook.com/${profile.id}/picture?type=large`;
          user.name.value = user.name.value || profile.displayName;
          user.birthDate.value = user.birthDate.value || new Date(profile._json.birthday);
          user = await user.save();
          return done(null, { id: user.id, href: user.href });
        }
      }

      user = await createUser(profile);
      return done(null, { id: user.id, href: user.href });
    }

    loginFacebook().catch(done);
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
    email: profile._json.email,
    username,
    avatar: `https://graph.facebook.com/${profile.id}/picture?type=large`,
    'name.value': profile.displayName,
    'birthDate.value': new Date(profile._json.birthday),
    'profile.facebook': {
      id: profile.id,
      link: profile._json.link,
    },
  });
}
