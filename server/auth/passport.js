import passport from 'passport';
import facebookStrategy from './facebook';

passport.use(facebookStrategy);

export default passport;
