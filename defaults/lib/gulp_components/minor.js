var gulp = require('gulp');
var getVersion = require('itsa-react-server-webpack-builder').getVersion;

gulp.task('component:minor', () => {
    var versions = getVersion(),
        previousRelease = versions.developmentString,
        nextRelease = versions.getNextDevVersion('minor');

    return gulp.src('./src/'+previousRelease+'/**/*', {
        base: './src/'+previousRelease
    }).pipe(gulp.dest('./src/'+nextRelease));
});