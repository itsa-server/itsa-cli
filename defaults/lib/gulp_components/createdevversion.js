var gulp = require('gulp');
var bump = require('gulp-bump');
var fs = require('fs-extra');
var getversion = require('../custom_modules/getversion');
var SRC_DIR = './src/';
var DEVELOPMENT_DIR = './development_server/';

gulp.task('component:createdevversion', () => {
    var versions = getversion(),
        previousRelease = versions.developmentString,
        freeRelease = versions.nextProdVersion;

    if (previousRelease!==freeRelease) {
        fs.copySync('./public_server/server.js', DEVELOPMENT_DIR+'server.js');

        gulp.src('./'+'package.json')
            .pipe(bump({version: freeRelease}))
            .pipe(gulp.dest(DEVELOPMENT_DIR));

        fs.emptyDirSync(DEVELOPMENT_DIR+'versions');

        fs.copySync(SRC_DIR+previousRelease+'/reactserver.config.json', DEVELOPMENT_DIR+'versions/'+freeRelease+'/reactserver.config.json');

        return gulp.src([SRC_DIR+previousRelease+'/**/*', '!'+SRC_DIR+previousRelease+'/{app.js,views,views/**,assets/css,assets/css/**}'], {
            base: SRC_DIR+previousRelease
        }).pipe(gulp.dest(DEVELOPMENT_DIR+'versions/'+freeRelease));

    }
});