var gulp = require('gulp');
var getVersion = require('itsa-react-server-webpack-builder').getVersion;

gulp.task('component:major', () => {
    var versions = getVersion(),
        previousRelease = versions.developmentString,
        nextRelease = versions.getNextDevVersion('major');

    return gulp.src('./src/'+previousRelease+'/**/*', {
        base: './src/'+previousRelease
    }).pipe(gulp.dest('./src/'+nextRelease));
});