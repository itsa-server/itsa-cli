'use strict';

require('../gulp_components/createdevversion');
require('../gulp_components/dev-webpack-apps');
require('../gulp_components/dev-webpack-views');
require('./test');

const runSequence = require('run-sequence');

const cb = callback => {
  let devServer;
  runSequence(
    'test',
    'component:createdevversion',
    'component:dev-webpack-views',
    'component:dev-webpack-apps',
    function (error) {
      if (error) {
          console.log('=============================================================================================================================');
          console.log('NO DEVELOPMENT ENVIRONMENT CREATED, DUE TO ERROR:');
          console.log(error.message);
          console.log('=============================================================================================================================');
          callback(error);
      } else {
          devServer = require('../custom_modules/run-development-server');
          devServer('tablet');
      }
    });
};

module.exports = cb;