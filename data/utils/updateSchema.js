'use strict';
require('babel-register');
let fs = require('fs');
let path = require('path');
let Schema = require('../schema');
let graphql = require('graphql').graphql;
let introspectionQuery = require('graphql/utilities').introspectionQuery,
    printSchema = require('graphql/utilities').printSchema;

(function(){
  graphql(Schema, introspectionQuery).then(function(result){
    if(result.errors){
      console.error('Error inspecting schema: ', JSON.stringify(result.errors, null, 2));
    }
    else{
      fs.writeFileSync(path.join(__dirname, '../schema.json'), JSON.stringify(result, null, 2));
    }
  });

  fs.writeFileSync(path.join(__dirname, '../schema.graphql'), printSchema(Schema));
})();
