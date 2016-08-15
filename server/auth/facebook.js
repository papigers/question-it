import { Strategy as FacebookStrategy } from 'passport-facebook';
import { auth as config } from '../../config';
import { User } from '../../data/models';

/* eslint-disable no-underscore-dangle */

export default new FacebookStrategy({
  clientID: config.facebook.id,
  clientSecret: config.facebook.secret,
  callbackURL: '/login/facebook/return',
  profileFields: ['name', 'displayName', 'birthday', 'email', 'link'],
  passReqToCallback: true,
}, (req, accessToken, refreshToken, profile, done) => {
  async function loginFacebook() {
    if (req.user) {
      let userDB = await User.findOne({
        'profile.facebook.id': profile.id,
      });

      if (userDB) {
        userDB.profile.facebook.link = profile._json.link;
        userDB = await userDB.save();
        return done(null, { id: userDB.id });
      }
      const user = createUser(profile);
      return done(null, { id: user.id });
    }

    const users = await User.find({
      'profile.facebook.id': profile.id,
    });

    if (users.length) {
      return done(null, { id: users[0].id });
    }

    let user = await User.findOne({
      email: profile._json.email,
    });

    if (user) {
      user.profile.facebook.id = profile.id;
      user.profile.facebook.link = profile._json.link;
      user = await user.save();
      return done(null, { id: user.id });
    }

    user = await createUser(profile);
    return done(null, { id: user.id });
  }

  loginFacebook().catch(done);
});

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
      token: profile.accessToken,
      link: profile._json.link,
    },
  });
}
