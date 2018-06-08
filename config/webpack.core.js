'use strict';
var path = require('path');

var webpack = require('webpack');
var { env: { NODE_ENV = 'development' } } = process;

module.exports = {
  entry: {
    pokedex: ['./styles/main.scss', './src/main.tsx']
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json']
  },
  devServer: {
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true, // Open the page in browser
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS
      ]
    }, {
      test: /\.tsx?$/,
      use: 'awesome-typescript-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    })
  ]
};
