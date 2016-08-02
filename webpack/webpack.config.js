const path = require('path');
const webpack = require('webpack');
const config = require('../config');

function contains(arr, val) {
  return arr.indexOf(val) > -1;
}

const DEBUG = !(process.env.NODE_ENV === 'production' || contains(process.argv, '-p'));
const ENV = process.env.NODE_ENV || 'development';
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];


const webpackConfig = {
  context: path.resolve(__dirname, '..'),
  entry: [path.resolve(__dirname, '../client/index.jsx')],
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: config.buildLocation,
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  node: {
    __dirname: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          `babel?plugins[]=${path.join(__dirname, '..', 'data', 'plugins', 'babelRelayPlugin')}`,
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'isomorphic-style-loader',
          `css-loader?${JSON.stringify({
            sourceMap: DEBUG,
            localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
            modules: true,
            minimize: !DEBUG,
          })}`,
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        loaders: [
          'isomorphic-style-loader',
          `css-loader?${JSON.stringify({
            sourceMap: DEBUG,
            localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
            minimize: !DEBUG,
          })}`,
          'less-loader',
        ],
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?limit=10000&mimetype=image/gif',
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=10000&mimetype=image/png',
      },
      {
        test: /\.svg/,
        loader: 'url-loader?limit=26000&mimetype=image/svg+xml',
      },
      {
        test: /\.(woff|woff2|ttf|eot)/,
        loader: 'url-loader?limit=1&name=/[hash].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': Object.assign({}, process.env, {
        NODE_ENV: JSON.stringify(ENV),
      }),
    }),
  ],
  devServer: {
    hot: true,
    proxy: {
      '*': `http://127.0.0.1:${(process.env.PORT || 3000)}`,
    },
    host: '127.0.0.1',
  },
  postcss() {
    /* eslint-disable global-require */
    return [
      // W3C variables, e.g. :root { --color: red; } div { background: var(--color); }
      // https://github.com/postcss/postcss-custom-properties
      require('postcss-simple-vars')({
        variables() {
          const vars = require('../shared/theme').palette;
          vars['screen-xs'] = '480px';
          vars['screen-sm'] = '768px';
          vars['screen-md'] = '992px';
          vars['screen-lg'] = '1200px';
          vars['screen-xlg'] = '1600px';
          vars['screen-xs-max'] = '479px';
          vars['screen-sm-max'] = '767px';
          vars['screen-md-max'] = '991px';
          vars['screen-lg-max'] = '1199px';
          vars['screen-xlg-max'] = '1599px';
          return vars;
        },
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
      require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
    ];
    /* eslint-enable global-require */
  },
};


module.exports = webpackConfig;
