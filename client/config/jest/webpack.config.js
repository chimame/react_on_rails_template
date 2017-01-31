const path = require('path')
const webpack = require('webpack')

module.exports = {
  output: {
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader'
        ]
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      postcss: {}
    })
  ],
};
