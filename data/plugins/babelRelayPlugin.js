const getBabelRelayPlugin = require('babel-relay-plugin');
const path = require('path');

const schemaLocation = path.join(__dirname, '..', '..', 'build', 'schema.json');
const schema = require(schemaLocation).data;

module.exports = getBabelRelayPlugin(schema);
