'use strict';
var path = require('path');
require('babel-register');
require('babel-polyfill');

require('app-module-path').addPath(path.join(__dirname,'shared'));

var server = require('./server');


const PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});