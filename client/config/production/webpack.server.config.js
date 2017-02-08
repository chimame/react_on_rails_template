const webpack = require('webpack')
const path = require('path')
const glob = require("glob");

module.exports = {
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    './app/startup/registration',
  ],
  output: {
    filename: 'webpack-bundle.js',
    path: '../app/assets/webpack',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'isomorphic-style-loader',
          'css-loader?modules',
          'postcss-loader'
        ]
      }/*他のローダが必要ならこんな感じに,
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader'
      }*/
    ]
  }
};
