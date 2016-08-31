import mongoose from 'mongoose';
import { hrefMiddleware } from './middlewares';

import bcrypt from 'bcrypt-nodejs';

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
  href: {
    type: String,
    index: {
      unique: true,
    },
  },
}, {
  timestamps: true,
});

userSchema.methods.generateHash = function generateHash(password, next) {
  bcrypt.genSalt(8, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(password, salt, null, next);
  });
};

userSchema.methods.validPassword = function validPassword(password, next) {
  bcrypt.compare(password, this.password, next);
};


userSchema.post('validate', hrefMiddleware);

const User = mongoose.model('User', userSchema);

export default User;
