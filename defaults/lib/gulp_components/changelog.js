'use strict';

var gulp = require('gulp');
var conventionalChangelog = require('gulp-conventional-changelog');

gulp.task('component:changelog', () => {
    return gulp.src('./CHANGELOG.md', {
        buffer: false
    })
    .pipe(conventionalChangelog({
        preset: 'angular' // Or to any other commit message convention you use.
    }))
    .pipe(gulp.dest('./'));
});