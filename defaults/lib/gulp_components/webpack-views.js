'use strict';

const gulp = require('gulp'),
      runWebpack = require('../custom_modules/run-webpack.js');

gulp.task('component:webpack-views', (callback) => {
    runWebpack(true, 'views', callback);
});