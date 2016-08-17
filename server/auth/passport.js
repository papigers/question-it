import passport from 'passport';
import facebookStrategy from './facebook';
import linkedinStrategy from './linkedin';
import googleStrategy from './google';

passport.use(facebookStrategy);
passport.use(linkedinStrategy);
passport.use(googleStrategy);

export default passport;
