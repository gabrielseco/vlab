const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { TITLE } = require('./env/dev.env');
const loaders = require('./webpack/loaders');
const optimization = require('./webpack/optimization');
const resolve = require('./webpack/resolve');

module.exports = {
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, './../public/static'),
    filename: 'js/[name].[hash].js',
    publicPath: './static/'
  },
  entry: ['./src/index.js'],
  resolve: resolve,
  optimization: optimization,
  plugins: [
    new HtmlWebpackPlugin({
      title: TITLE,
      template: './assets/index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: loaders
  },
  mode: 'production'
};
