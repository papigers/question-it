import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  password: {
    type: String,
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
  profile: {
    facebook: {
      id: {
        type: String,
      },
      link: {
        type: String,
      },
      public: {
        type: Boolean,
        default: false,
      },
    },
    google: {
      id: {
        type: String,
      },
      link: {
        type: String,
      },
      public: {
        type: Boolean,
        default: false,
      },
    },
    linkedin: {
      id: {
        type: String,
      },
      link: {
        type: String,
      },
      public: {
        type: Boolean,
        default: false,
      },
    },
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
