import express from 'express';
import multer from 'multer';
import path from 'path';
import mkdirp from 'mkdirp';
import { toGlobalId } from 'graphql-relay';
const router = express.Router();

const avatarStorage = multer.diskStorage({
  destination: (req, file, done) => {
    const dest = path.resolve(__dirname, '..', '..', 'public', 'upload', toGlobalId(req.user.href), 'images');
    mkdirp(dest, err => {
      if (err) {
        return done(err);
      }
      return done(null, dest);
    });
  },
  filename: (req, file, done) => {
    done(null, 'avatar.png');
  },
});

const uploadAvatar = multer({ storage: avatarStorage }).single('avatar');

router.post('/images/avatar', (req, res) => {
  uploadAvatar(req, res, err => {
    if (err) {
      return res.status(500).json({ success: false, err });
    }
    return res.json({ success: true, path: `/api/${toGlobalId(req.user.href)}/avatar` });
  });
});

export default router;
