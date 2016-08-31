import mongoose from 'mongoose';
import { hrefMiddleware } from './middlewares';

const voteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  options: {
    type: [Number],
    required: true,
    validate: [
      (options) => options.length <= 10 && options.length >= 1,
      'Vote must contain between 1 to 10 options',
    ],
  },
  href: {
    type: String,
    index: {
      unique: true,
    },
  },
}, {
  timestamps: true,
});

voteSchema.post('validate', hrefMiddleware);

const Vote = mongoose.model('Vote', voteSchema);

export default Vote;
