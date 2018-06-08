'use strict';
var { env: { NODE_ENV = 'development' } } = process;

module.exports = require(`./config/webpack.${NODE_ENV}`);
