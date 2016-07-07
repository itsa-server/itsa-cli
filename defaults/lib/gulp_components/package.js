var gulp = require('gulp');
var gulpbump = require('gulp-bump');

gulp.task('component:package', () => {
    return gulp.src('./package.json')
           .pipe(gulpbump())
           .pipe(gulp.dest('./'));
});