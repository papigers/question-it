const path = require('path');

module.exports = {
  buildLocation: path.join(__dirname, 'statics', 'build'),
  favicon: path.join(__dirname, 'statics', 'favicon', 'favicon.ico'),
  hostname: 'localhost',
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost/question-it',
  mockViewer: process.env.MOCK_VIEWER || '578db69904ec1604238533ca',
};
