const path = require('path')
const webpack = require('webpack')
const glob = require("glob")

const entrys = {}
glob.sync("./frontend/test/*/*.js").forEach(
  (file) => {
    entrys[file.replace("./frontend/test", "").replace(".js", "")] = file
  }
)

module.exports = {
  entry: entrys,
  output: {
    path: "./frontend/__tests__/",
    filename: '[name].spec.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ["es2015", "stage-2", "react"]
        }
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  },
  devServer: {
    contentBase: '../public/dist',
    port: 4000
  },
  externals: {
    'jsdom': 'window',
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
  },
};
