const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin');
const glob = require("glob");

module.exports = {
  entry: glob.sync("./frontend/js/*.js"),
  output: {
    path: './public/dist',
    filename: '[name]-[hash].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new ManifestPlugin()
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015',"stage-2"]
        }
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
