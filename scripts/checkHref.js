import shortid from 'short-mongo-id';
import mongoose from 'mongoose';
import config from '../config';
import * as models from '../data/models';

mongoose.connect(config.mongoURL);

Object.keys(models).forEach((key, i, keys) => {
  const model = models[key];
  model.find({ href: { $exists: false } }, (err, res) => {
    res.forEach((doc, j, docs) => {
      doc.href = shortid(doc._id);
      doc.save(() => {
        if (i === keys.length - 1 && j === docs.length - 1) {
          mongoose.connection.close();
        }
      });
    });
  });
});
