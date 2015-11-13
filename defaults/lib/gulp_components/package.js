var gulp = require('gulp');
var gulpbump = require('gulp-bump');
var getVersion = require('itsa-react-server-webpack-builder').getVersion;

gulp.task('component:package', () => {
    var versions = getVersion();
    return gulp.src('./package.json')
           .pipe(gulpbump({version: versions.nextProdVersion}))
           .pipe(gulp.dest('./'));
});