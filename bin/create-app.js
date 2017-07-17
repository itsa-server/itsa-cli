/*eslint no-empty: 0*/

'use strict';

var fs = require('fs-extra'),
    Path = require('path'),
    TEMPLATE_DIR = Path.join(__dirname, '../project-templates/'),
    exec = require('child_process').exec,
    createCookie = require('./create-cookie'),
    createApp, child;

createApp = function(template, dirName) {
    const sourceDir = TEMPLATE_DIR + template;
    try {
        fs.accessSync(dirName);
        // if this succeeds, then dirname exists and we should break
        console.log('It seems there already exists an application with this filename');
        return;
    }
    catch(err) {}

    // now we can create the app-directory with default content
    try {
        console.log('Creating folder '+dirName);
        fs.copySync(sourceDir, './'+dirName);
        createCookie.create(dirName);
        process.chdir(process.cwd()+'/'+dirName);
        console.log('Installing npm modules, hold on!');
        child = exec('npm install');
        child.on('close', function() {
            console.log('Ready!');
        });
    }
    catch(err) {
        console.log(err);
    }
};

module.exports = createApp;