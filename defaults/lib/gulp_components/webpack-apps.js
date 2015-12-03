'use strict';

const gulp = require('gulp'),
      runWebpack = require('itsa-react-server-webpack-builder').runWebpack;

gulp.task('component:webpack-apps', (callback) => {
    runWebpack(true, 'apps', callback);
});