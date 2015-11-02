'use strict';

const gulp = require('gulp'),
      runWebpack = require('../custom_modules/run-webpack.js');

gulp.task('component:dev-webpack-views', (callback) => {
    runWebpack(false, 'views', callback);
});