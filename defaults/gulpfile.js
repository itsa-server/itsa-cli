var gulp = require('gulp');
var cbTest = require('./lib/gulp_callbacks/test');
var cbDevServer = require('./lib/gulp_callbacks/devserver');
var cbDevServerTablet = require('./lib/gulp_callbacks/devservertablet');
var cbDevServerPhone = require('./lib/gulp_callbacks/devserverphone');
// var cbDeploy = require('./lib/gulp_callbacks/deploy');
var cbBumpMajor = require('./lib/gulp_callbacks/bumpmajor');
var cbBumpMinor = require('./lib/gulp_callbacks/bumpminor');
var cbBumpPatch = require('./lib/gulp_callbacks/bumppatch');
var cbBumpPreRelease = require('./lib/gulp_callbacks/bumpprerelease');

gulp.task('test', cbTest);

gulp.task('devserver', cbDevServer);
gulp.task('devservertablet', cbDevServerTablet);
gulp.task('devserverphone', cbDevServerPhone);

// gulp.task('deploy', cbDeploy);

gulp.task('bumpmajor', cbBumpMajor);

gulp.task('bumpminor', cbBumpMinor);

gulp.task('bumppatch', cbBumpPatch);

gulp.task('bumpprerelease', cbBumpPreRelease);

gulp.task('default', cbDevServer);