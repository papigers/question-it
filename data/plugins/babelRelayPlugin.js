var getBabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../schema.json').data;

module.exports = getBabelRelayPlugin(schema);
