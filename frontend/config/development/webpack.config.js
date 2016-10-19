const path = require('path');
const webpack = require('webpack');
const glob = require("glob");

module.exports = {
  entry: glob.sync("./frontend/javascripts/*.js"),
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: '[name].js',  // このままならmain.jsが作成される
    publicPath: 'http://localhost:4000/',
    hot: true
  },
  module: {
    loaders: [
      {
        loaders: ['react-hot', 'babel?cacheDirectory=true,presets[]=es2015,presets[]=stage-2,presets[]=react'],
        exclude: /node_modules/,
        test: /\.js[x]?$/
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules',
          'postcss'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  },
  devServer: {
    contentBase: '../public/dist',
    port: 4000
  },
};
