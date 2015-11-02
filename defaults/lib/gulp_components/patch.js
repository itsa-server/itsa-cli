
var gulp = require('gulp');
var getversion = require('../custom_modules/getversion');

gulp.task('component:patch', () => {
    var versions = getversion(),
        previousRelease = versions.developmentString,
        nextRelease = versions.getNextDevVersion('patch');
    return gulp.src('./src/'+previousRelease+'/**/*', {
        base: './src/'+previousRelease
    }).pipe(gulp.dest('./src/'+nextRelease));
});