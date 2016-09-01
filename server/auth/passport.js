import passport from 'passport';
import { FacebookStrategy, LinkedinStrategy, GoogleStrategy, LocalStrategy } from './strategy';

/* eslint-disable new-cap */
passport.use(FacebookStrategy());
passport.use('facebook-link', FacebookStrategy(true));
passport.use(LinkedinStrategy());
passport.use('linkedin-link', LinkedinStrategy(true));
passport.use(GoogleStrategy());
passport.use('google-link', GoogleStrategy(true));
passport.use(LocalStrategy);

export default passport;
