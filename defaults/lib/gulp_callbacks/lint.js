'use strict';

const gulp = require('gulp'),
    eslint = require('gulp-eslint');

const cb = () => {
    const testdir = './src/**/*.{js,jsx}';
      // patterns with the same form as gulp.src(patterns)
    return gulp.src([testdir])
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint('./.eslintrc'))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(eslint.failOnError());
};

module.exports = cb;