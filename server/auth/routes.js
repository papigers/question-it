import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { auth } from '../../config';
const router = express.Router();

router.post('/login/local', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      const error = info.message || 'Login failed, please try again later';
      if (req.xhr || req.headers.accept.indexOf('json') > -1) {
        return res.status(401).json({
          success: false,
          error,
        });
      }
      return res.redirect('/login');
    }
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(user, auth.jwt.secret, { expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      return res.json({
        success: true,
        redirect: '/',
      });
    }
    res.redirect('/');
  })(req, res, next);
});

router.get('/logoff', (req, res) => {
  res.clearCookie('id_token');
  res.redirect('/');
});

router.get('/login/facebook', passport.authenticate('facebook', {
  scope: ['email', 'user_birthday'],
  session: false,
}));

router.get(auth.facebook.callbackURL, passport.authenticate('facebook', {
  failureRedirect: '/login',
  session: false,
}), (req, res) => {
  const expiresIn = 60 * 60 * 24 * 180; // 180 days
  const token = jwt.sign(req.user, auth.jwt.secret, { expiresIn });
  res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
  res.redirect('/');
});

router.get('/login/linkedin', passport.authenticate('linkedin', {
  state: auth.linkedin.state,
  session: false,
}));

router.get(auth.linkedin.callbackURL, passport.authenticate('linkedin', {
  failureRedirect: '/login',
  session: false,
}), (req, res) => {
  const expiresIn = 60 * 60 * 24 * 180; // 180 days
  const token = jwt.sign(req.user, auth.jwt.secret, { expiresIn });
  res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
  res.redirect('/');
});

router.get('/login/google', passport.authenticate('google', {
  state: auth.linkedin.state,
  scope: ['profile', 'email'],
  session: false,
}));

router.get(auth.google.callbackURL, passport.authenticate('google', {
  failureRedirect: '/login',
  session: false,
}), (req, res) => {
  const expiresIn = 60 * 60 * 24 * 180; // 180 days
  const token = jwt.sign(req.user, auth.jwt.secret, { expiresIn });
  res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
  res.redirect('/');
});

export default router;
