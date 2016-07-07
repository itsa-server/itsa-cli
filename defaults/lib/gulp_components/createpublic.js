console.log('create public');
var gulp = require('gulp');
var fs = require('fs-extra');
var SRC_DIR = './src';
var SERVER_DIR = './public';

gulp.task('component:createpublic', () => {

    fs.emptyDirSync(SERVER_DIR);
    // fs.copySync(SRC_DIR+'/reactserver.config.json', SERVER_DIR+'/reactserver.config.json');

    return gulp.src([SRC_DIR+'/**/*', '!'+SRC_DIR+'/{app.js,views,views/**,tests,tests/**,pageapps,pageapps/**,assets/css,assets/css/**}'], {
        base: SRC_DIR
    }).pipe(gulp.dest(SERVER_DIR));

});