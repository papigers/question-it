import { Strategy } from 'passport-local';
import { User } from '../../../data/models';

/* eslint-disable no-underscore-dangle */

export default new Strategy({
  passReqToCallback: true,
}, (req, username, password, done) => {
  async function loginLocal() {
    const user = await User.findOne({ username: new RegExp(username, 'i') });
    if (!user || user.password !== password) {
      return done(null, null, { message: 'Invalid username or password' });
    }
    return done(null, { id: user._id });
  }

  loginLocal().catch(done);
});
