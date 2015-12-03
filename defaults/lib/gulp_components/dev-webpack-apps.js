'use strict';

const gulp = require('gulp'),
      runWebpack = require('itsa-react-server-webpack-builder').runWebpack;

gulp.task('component:dev-webpack-apps', (callback) => {
    runWebpack(false, 'apps', callback);
});