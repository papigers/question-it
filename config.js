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
  
  universalWebpack: {
    server: {
      input: path.join(root, 'server', 'server.js'),
      output: path.join(buildLocation, 'server', 'server.js'),
    },
  },
};
