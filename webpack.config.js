var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['./client/index.jsx'],
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions:         ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js',
		publicPath: "/build"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
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
				NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development' )
    	}
		}),
		new ExtractTextPlugin("bundle.css")
	]
};