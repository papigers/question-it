const path = require('path');

const root = path.resolve(__dirname);
const buildLocation = path.join(root, 'public', 'build');
const appURL = process.env.APP_URI || 'http://localhost';
const port = process.env.PORT || 3000;

module.exports = {
  root,
  buildLocation,
  favicon: path.join(root, 'public', 'favicon', 'favicon.ico'),
  hostname: 'localhost',
  port,
  devServerPort: 8080,
  appURL,
  mongoURL: process.env.MONGODB_URI || 'mongodb://localhost/question-it',
  mockViewer: process.env.MOCK_VIEWER || '578db69904ec1604238533ca',
  
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET || 'wowsuchsecretsosecretary',
    },
    facebook: {
      id: process.env.FACEBOOK_ID,
      secret: process.env.FACEBOOK_SECRET,
      callbackURL: '/facebook/callback',
    },
    google: {
      id: process.env.GOOGLE_ID,
      secret: process.env.GOOGLE_SECRET,
      callbackURL: '/google/callback',
    },
    linkedin: {
      id: process.env.LINKEDIN_ID,
      secret: process.env.LINKEDIN_SECRET,
      state: process.env.LINKEDIN_STATE,
      callbackURL: '/linkedin/callback',
    },
  },

  universalWebpack: {
    server: {
      input: path.join(root, 'server', 'server.jsx'),
      output: path.join(buildLocation, 'server', 'server.js'),
    },
  },
};
