import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: String,
  bio: String,
  birthDate: {
    value: {
      type: Date,
    },
    public: {
      type: Boolean,
      default: false,
    },
  },
  name: {
    value: {
      type: String,
    },
    public: {
      type: Boolean,
      default: false,
    },
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
