const path = require('path');
module.exports = {
  server: {
    input: path.resolve(__dirname, '../server/server.js'),
    output: path.resolve(__dirname, '../build/server/server.js'),
  },
};
