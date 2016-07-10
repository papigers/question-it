const path = require('path');
const config = require('../config');

module.exports = {
  server: {
    input: path.resolve(__dirname, '../server/server.js'),
    output: path.join(config.buildLocation, '/server/server.js'),
  },
};
