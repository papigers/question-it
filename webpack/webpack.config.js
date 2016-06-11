var path = require('path');
var webpack = require('webpack');

Array.prototype.contains = function(val){
	return this.indexOf(val) > -1;
}
var DEBUG = !(process.env.NODE_ENV === 'production' || process.argv.contains('-p'));
var ENV = process.env.NODE_ENV || 'development';
var AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];


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
				loaders: [
					"isomorphic-style-loader",
					`css-loader?${JSON.stringify({
						sourceMap: DEBUG,
						localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
						modules: true,
						minimize: !DEBUG,
					})}`,
					"postcss-loader"
				]
			},
			{
				test: /\.less$/,
				loaders: [
					"isomorphic-style-loader",
					`css-loader?${JSON.stringify({
						sourceMap: DEBUG,
						localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
						minimize: !DEBUG,
					})}`,
					"less-loader"
				]
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
  },
	postcss: function(){
		return [
        // W3C variables, e.g. :root { --color: red; } div { background: var(--color); }
        // https://github.com/postcss/postcss-custom-properties
        require('postcss-simple-vars')({
					variables: function(){
						var colors = require('../shared/theme').palette;
						colors["screen-xs"] =  "480px";
						colors["screen-sm"] =  "768px";
						colors["screen-md"] =  "992px";
						colors["screen-lg"] =  "1200px";
						colors["screen-xlg"] =  "1600px";
						colors["screen-xs-max"] =  "479px";
						colors["screen-sm-max"] =  "767px";
						colors["screen-md-max"] =  "991px";
						colors["screen-lg-max"] =  "1199px";
						colors["screen-xlg-max"] =  "1599px";
						return colors;
					}
				}),
        // W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);
        // https://github.com/postcss/postcss-custom-media
        require('postcss-custom-media')(),
        // CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
        // https://github.com/postcss/postcss-media-minmax
        require('postcss-media-minmax')(),
        // W3C CSS Custom Selectors, e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;
        // https://github.com/postcss/postcss-custom-selectors
        require('postcss-custom-selectors')(),
        // W3C calc() function, e.g. div { height: calc(100px - 2em); }
        // https://github.com/postcss/postcss-calc
        require('postcss-calc')(),
        // Allows you to nest one style rule inside another
        // https://github.com/jonathantneal/postcss-nesting
        require('postcss-nesting')(),
        // W3C color() function, e.g. div { background: color(red alpha(90%)); }
        // https://github.com/postcss/postcss-color-function
        require('postcss-color-function')(),

        // Generate pixel fallback for "rem" units, e.g. div { margin: 2.5rem 2px 3em 100%; }
        // https://github.com/robwierzbowski/node-pixrem
        require('pixrem')(),
        // Add vendor prefixes to CSS rules using values from caniuse.com
        // https://github.com/postcss/autoprefixer
        require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })
		];
	}
};


module.exports = config;
