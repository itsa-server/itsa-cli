var gulp = require('gulp');
var cbLint = require('./lib/gulp_callbacks/lint');
var cbDevServer = require('./lib/gulp_callbacks/devserver');
var cbDevServerTablet = require('./lib/gulp_callbacks/devservertablet');
var cbDevServerPhone = require('./lib/gulp_callbacks/devserverphone');
var cbBuild = require('./lib/gulp_callbacks/build');

gulp.task('lint', cbLint);

gulp.task('devserver', cbDevServer);
gulp.task('devservertablet', cbDevServerTablet);
gulp.task('devserverphone', cbDevServerPhone);
gulp.task('build', cbBuild);

gulp.task('default', cbDevServer);
