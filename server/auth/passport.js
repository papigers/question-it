import passport from 'passport';
import { FacebookStrategy, LinkedinStrategy, GoogleStrategy, LocalStrategy } from './strategy';

passport.use(FacebookStrategy);
passport.use(LinkedinStrategy);
passport.use(GoogleStrategy);
passport.use(LocalStrategy);

export default passport;
