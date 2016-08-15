const path = require('path');

const root = path.resolve(__dirname);
const buildLocation = path.join(root, 'public', 'build');

module.exports = {
  root,
  buildLocation,
  favicon: path.join(root, 'public', 'favicon', 'favicon.ico'),
  hostname: 'localhost',
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost/question-it',
  mockViewer: process.env.MOCK_VIEWER || '578db69904ec1604238533ca',
  
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET || 'wowsuchsecretsosecretary',
    },
    facebook: {
      id: process.env.FACEBOOK_ID,
      secret: process.env.FACEBOOK_SECRET,
    },
    google: {
      secret: process.env.GOOGLE_SECRET,
    },
    twitter: {
      secret: process.env.TWITTER_SECRET,
    },
  },

  universalWebpack: {
    server: {
      input: path.join(root, 'server', 'server.jsx'),
      output: path.join(buildLocation, 'server', 'server.js'),
    },
  },
};
