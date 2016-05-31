var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

Array.prototype.contains = function(val){
	return this.indexOf(val) > -1;
}
var DEBUG = !(process.env.NODE_ENV === 'production' || process.argv.contains('-p'));
var ENV = process.env.NODE_ENV || 'development';


function getStyleLoder(ext){
	var style = "style",
			extra = "css!autoprefixer" + (ext ? "!"+ext : "");
	
	return (DEBUG ? 
					style + "!" + extra : 
					ExtractTextPlugin.extract(style, extra));
}

var config = {
	context: path.resolve(__dirname, '..'),
  entry: [path.resolve(__dirname, '../client/index.jsx')],
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions:         ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '..', 'public', 'build'),
    filename: 'bundle.js',
		publicPath: "/build/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
			{
				test: /\.css$/,
				loader: getStyleLoder()
			},
			{
				test: /\.less$/,
				loader: getStyleLoder("less")
			},
			{
				test: /\.scss$/,
				loader: getStyleLoder("sass")
			},
			{ 
				test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" 
			},
			{ 
				test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" 
			},
			{
				test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" 
			},
			{
				test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" 
			},
			{ 
				test: /\.(woff|woff2|ttf|eot)/, loader: "url-loader?limit=1&name=/[hash].[ext]" 
			}
    ]
  },
  plugins: [
		new webpack.DefinePlugin({
			"process.env": {
        BROWSER: JSON.stringify(true),
				NODE_ENV: JSON.stringify(ENV)
    	}
		})
	],
	devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
    },
    host: '127.0.0.1'
  }
};

if(!DEBUG)
	config.plugins.push(new ExtractTextPlugin("bundle.css"));

module.exports = config;