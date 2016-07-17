import mongoose from 'mongoose';

const pollSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  multi: {
    type: Boolean,
    default: false,
  },
  options: {
    type: [String],
    required: true,
    validate: [
      (options) => options.length <= 10 && options.length >= 2,
      'Poll must contain between 2 to 10 options',
    ],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

const Poll = mongoose.model('Poll', pollSchema);

export default Poll;
