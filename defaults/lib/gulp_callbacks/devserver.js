'use strict';

require('../gulp_components/createdevserver');
require('../gulp_components/dev-webpack-apps');
require('../gulp_components/dev-webpack-views');
require('./lint');

const runSequence = require('run-sequence');

const cb = callback => {
  let devServer;
  runSequence(
    'lint',
    'component:createdevserver',
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
          // devServer = require('../custom_modules/run-development-server');
          devServer = require('itsa-react-server-webpack-builder').runDevelopmentServer;
          process.chdir(process.cwd()+'/development_server');
          devServer('development');
      }
    });
};

module.exports = cb;