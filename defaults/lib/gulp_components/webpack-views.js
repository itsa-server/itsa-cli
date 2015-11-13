'use strict';

const gulp = require('gulp'),
      runWebpack = require('itsa-react-server-webpack-builder').runWebpack;

gulp.task('component:webpack-views', (callback) => {
    runWebpack(true, 'views', callback);
});