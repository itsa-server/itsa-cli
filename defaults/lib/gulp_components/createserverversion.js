var gulp = require('gulp');
var fs = require('fs-extra');
var getversion = require('../custom_modules/getversion');
var SRC_DIR = './src/';
var SERVER_DIR = './public_server/';

gulp.task('component:createserverversion', () => {
    var versions = getversion(),
        previousRelease = versions.developmentString,
        freeRelease = versions.nextProdVersion;

    if (previousRelease!==freeRelease) {
        fs.copySync('./'+'package.json', SERVER_DIR+'package.json');
        fs.copySync(SRC_DIR+previousRelease+'/reactserver.config.json', SERVER_DIR+'versions/'+freeRelease+'/reactserver.config.json');

        gulp.src(SRC_DIR+previousRelease+'/**}', {
            base: SRC_DIR+previousRelease
        }).pipe(gulp.dest(SRC_DIR+freeRelease));

        return gulp.src([SRC_DIR+previousRelease+'/**/*', '!'+SRC_DIR+previousRelease+'/{app.js,views,views/**,pageapps,pageapps/**,assets/css,assets/css/**}'], {
            base: SRC_DIR+previousRelease
        }).pipe(gulp.dest(SRC_DIR+freeRelease))
          .pipe(gulp.dest(SERVER_DIR+'versions/'+freeRelease));

    }
});