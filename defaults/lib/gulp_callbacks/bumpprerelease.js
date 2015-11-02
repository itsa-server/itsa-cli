'use strict';

require('../gulp_components/prerelease');

const getversion = require('../custom_modules/getversion'),
      runSequence = require('run-sequence');

const cb = callback => {
  const nextDevVersion = getversion().getNextDevVersion('prerelease');
  runSequence(
    'component:prerelease',
    function (error) {
      let notify, message;
      if (error) {
        console.log('=============================================================================================================================');
        console.log('NO VERSION-BUMP, DUE TO ERROR');
        console.log(error.message);
        console.log('=============================================================================================================================');
      } else {
        message = 'PRERELEASE FINISHED SUCCESSFULLY';
        console.log('=============================================================================================================================');
        console.log(message+', YOU CAN DEVELOP FURTHER WITH VERSION '+nextDevVersion);
        console.log('=============================================================================================================================');
        notify = require('node-notify');
        notify({
            title: 'Gulp bumpprerelease',
            message,
            sound: true
        });
      }
      callback(error);
    });
};

module.exports = cb;