const path = require('path');
const webpack = require('webpack');
const glob = require("glob");

module.exports = {
  entry: glob.sync("./app/startup/*.js"),
  output: {
    filename: '[name].js',  // このままならmain.jsが作成される
    publicPath: 'http://localhost:4000/'
  },
  module: {
    loaders: [
      {
        test: require.resolve('react'),
        loader: 'imports-loader?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      postcss: {}
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../public/dist',
    port: 4000
  }
};
