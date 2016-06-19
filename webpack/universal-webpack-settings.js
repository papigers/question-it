var path = require('path');
module.exports=
{
    server:
    {
        input: path.resolve(__dirname, '../server.js'),
        output: path.resolve(__dirname, '../public/build/server/server.js')
    }
}
