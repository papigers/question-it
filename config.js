const path = require('path');

module.exports = {
  buildLocation: path.join(__dirname, 'statics', 'build'),
  favicon: path.join(__dirname, 'statics', 'favicon', 'favicon.ico'),
  hostname: 'localhost',
  port: 3000,
  mongoUrl: 'mongodb://localhost/question-it',
};
