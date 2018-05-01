const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { HOST, PORT, TITLE } = require('./env/dev.env');
const loaders = require('./webpack/loaders');
const optimization = require('./webpack/optimization');
const resolve = require('./webpack/resolve');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'js/main.js',
    publicPath: '/'
  },
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  resolve: resolve,
  optimization: optimization,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: TITLE,
      template: './assets/index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: loaders
  },
  mode: 'development'
};
