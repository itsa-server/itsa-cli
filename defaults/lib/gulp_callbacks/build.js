'use strict';

require('../gulp_components/createpublic');
require('../gulp_components/changelog');
require('../gulp_components/webpack-apps');
require('../gulp_components/webpack-views');
require('./lint');

const getVersion = require('itsa-react-server-webpack-builder').getVersion,
      runSequence = require('run-sequence');

getVersion().getNextDevVersion('patch');
const cb = callback => {
  runSequence(
    'lint',
    'component:createpublic',
    'component:webpack-views',
    'component:webpack-apps',
    callback
  );
};

module.exports = cb;