import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { auth } from '../../config';
const router = express.Router();

router.get('/login/facebook',
  passport.authenticate('facebook', { scope: ['email', 'user_birthday'], session: false })
);

router.get('/login/facebook/return', passport.authenticate('facebook', {
  failureRedirect: '/login',
  session: false,
}), (req, res) => {
  const expiresIn = 60 * 60 * 24 * 180; // 180 days
  const token = jwt.sign(req.user, auth.jwt.secret, { expiresIn });
  res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
  res.redirect('/login?redirect');
});

export default router;
