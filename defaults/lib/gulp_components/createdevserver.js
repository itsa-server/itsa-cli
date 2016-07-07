var gulp = require('gulp');
var bump = require('gulp-bump');
var fs = require('fs-extra');
var SRC_DIR = './src';
var DEVELOPMENT_DIR = './development_server';

gulp.task('component:createdevserver', () => {
    fs.emptyDirSync(DEVELOPMENT_DIR);

    fs.copySync('./server.js', DEVELOPMENT_DIR+'/server.js');
    fs.copySync('./package.json', DEVELOPMENT_DIR+'/package.json');
    // fs.copySync(SRC_DIR+'/reactserver.config.json', DEVELOPMENT_DIR+'/reactserver.config.json');

    return gulp.src([SRC_DIR+'/**/*', '!'+SRC_DIR+'/{app.js,views,views/**,tests,tests/**,pageapps,pageapps/**,assets/css,assets/css/**}'], {
        base: SRC_DIR
    }).pipe(gulp.dest(DEVELOPMENT_DIR+'/public'));
});