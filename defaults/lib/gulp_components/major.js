var gulp = require('gulp');
var getversion = require('../custom_modules/getversion');

gulp.task('component:major', () => {
    var versions = getversion(),
        previousRelease = versions.developmentString,
        nextRelease = versions.getNextDevVersion('major');

    return gulp.src('./src/'+previousRelease+'/**/*', {
        base: './src/'+previousRelease
    }).pipe(gulp.dest('./src/'+nextRelease));
});