'use strict';
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var UglifyJS = require('uglifyjs-webpack-plugin');

var coreConfig = require('./webpack.core');

module.exports = webpackMerge(coreConfig, {
  plugins: [
    new UglifyJS(),
  ]
});
