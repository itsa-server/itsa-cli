var gulp = require('gulp');
var gulpbump = require('gulp-bump');
var getversion = require('../custom_modules/getversion');

gulp.task('component:package', () => {
    var versions = getversion();
    return gulp.src('./package.json')
           .pipe(gulpbump({version: versions.nextProdVersion}))
           .pipe(gulp.dest('./'));
});