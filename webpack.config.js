var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var config = {
  context: path.join(__dirname, '/app'),

  entry: {
    build: [
      'angular',
      'angular-ui-router',
      './app.js'
    ]
  },
  output: {
    path: './',
    filename: 'build.js'
  },

  externals: nodeModules,

  target: 'atom',

  plugins: [
    new webpack.DefinePlugin({
      ON_DEV: process.env.NODE_ENV !== 'production',
      ON_PROD: process.env.NODE_ENV === 'production'
    }),
    new webpack.optimize.CommonsChunkPlugin('build', 'build.js')
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
