var gulp = require('gulp');
var getversion = require('../custom_modules/getversion');

gulp.task('component:minor', () => {
    var versions = getversion(),
        previousRelease = versions.developmentString,
        nextRelease = versions.getNextDevVersion('minor');

    return gulp.src('./src/'+previousRelease+'/**/*', {
        base: './src/'+previousRelease
    }).pipe(gulp.dest('./src/'+nextRelease));
});