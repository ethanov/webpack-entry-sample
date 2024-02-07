const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: {
    'chunkone': './index1.js',
    'chunktwo': './index2.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    port: '5000',
    static: {
      directory: path.join(__dirname, 'public')
    },
    open: true,
    hot: true,
    liveReload: true,
    proxy: {
      '/api': 'http://localhost:8000',
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index1.html'),
      chunks: ['chunkone']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index2.html'),
      chunks: ['chunktwo']
    })
  ]
};