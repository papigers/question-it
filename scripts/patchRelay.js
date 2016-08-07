require('babel-register');

const fs = require('fs');
const path = require('path');

function copyFile(source, target, cb) {
  let cbCalled = false;

  const rd = fs.createReadStream(source);
  rd.on('error', done);
  const wr = fs.createWriteStream(target);
  wr.on('error', done);
  wr.on('close', done);
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}

const source = path.resolve(__dirname, 'relay-patch-files');
const dest = path.resolve(__dirname, '..', 'node_modules', 'react-relay', 'lib');
const files = ['callsFromGraphQL.js', 'callsToGraphQL.js'];

files.forEach((file) => {
  copyFile(path.resolve(source, file), path.resolve(dest, file), (err) => {
    if (err) {
      /* eslint-disable no-console */
      console.log('\x1b[1m\x1b[31mError patching file: ', file);
      console.log(`${err}\x1b[39m`);
      /* eslint-enble no-console */
    }
  });
});
