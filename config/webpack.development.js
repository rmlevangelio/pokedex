'use strict';
var path = require('path');

var webpackMerge = require('webpack-merge');
var UglifyJS = require('uglifyjs-webpack-plugin');

var coreConfig = require('./webpack.core');

module.exports = webpackMerge(coreConfig, {
  devServer: {
    stats: {
      assets: true,
      assetsSort: 'size',
      cached: false,
      children: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      errors: true,
      errorDetails: true,
      hash: false,
      modules: false,
      publicPath: false,
      reasons: false,
      source: false,
      timings: true,
      version: false,
      warnings: true,
    }
  }
});
