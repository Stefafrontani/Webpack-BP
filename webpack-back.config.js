const path = require('path');
const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    back: ['@babel/polyfill', './src/api'],
    HotPol: ['@babel/polyfill', 'webpack/hot/poll?1000']
  },
  mode: 'development',
  watch: true,
  target: 'node',
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  })],
  module: {
    rules: [{
      test: /\.js?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new NodemonPlugin({
      watch: path.resolve('./build/back-bundle.js'),
      verbose: true,
      script: './build/back-bundle.js'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-bundle.js',
    publicPath: '/'
  }
};