const getBabelRelayPlugin = require('babel-relay-plugin');
const path = require('path');
const config = require('../../config');

const schemaLocation = path.resolve(config.buildLocation, 'schema.json');
const schema = require(schemaLocation).data;

module.exports = getBabelRelayPlugin(schema);
