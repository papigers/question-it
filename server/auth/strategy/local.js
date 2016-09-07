import { Strategy } from 'passport-local';
import { User } from '../../../data/models';

/* eslint-disable no-underscore-dangle */

export default new Strategy({
  passReqToCallback: true,
}, (req, username, password, done) => {
  async function loginLocal() {
    let user;
    if (username.indexOf('@') < 0) {
      user = await User.findOne({ username: new RegExp(username, 'i') });
    }
    else {
      user = await User.findOne({ email: new RegExp(username, 'i') });
    }
    if (!user) {
      return done(null, null, { message: 'Invalid username or password' });
    }
    user.validPassword(password, (err, valid) => {
      if (err) {
        return done(err);
      }
      return valid ?
        done(null, { id: user._id, href: user.href })
      : done(null, null, { message: 'Invalid username or password' });
    });
  }

  loginLocal().catch(done);
});
