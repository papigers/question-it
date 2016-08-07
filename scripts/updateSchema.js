require('babel-register');

const fs = require('fs');
const path = require('path');
const Schema = require('../data/schema');
const graphql = require('graphql').graphql;
const introspectionQuery = require('graphql/utilities').introspectionQuery;
const printSchema = require('graphql/utilities').printSchema;
const config = require('../config');

const buildLocation = config.buildLocation;

if (!fs.existsSync(buildLocation)) {
  fs.mkdirSync(buildLocation);
}

(() => {
  graphql(Schema, introspectionQuery).then((result) => {
    if (result.errors) {
      console.error('Error inspecting schema: ', JSON.stringify(result.errors, null, 2));
    }
    else {
      fs.writeFileSync(path.resolve(buildLocation, 'schema.json'), JSON.stringify(result, null, 2));
    }
  });

  fs.writeFileSync(path.resolve(buildLocation, 'schema.graphql'), printSchema(Schema));
})();
