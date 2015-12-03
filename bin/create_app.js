/*eslint no-empty: 0*/

'use strict';

var fs = require('fs-extra'),
    DEFAULTS_DIR = '/usr/local/lib/node_modules/itsa-cli/defaults',
    exec = require('child_process').exec,
    createApp, child;

createApp = function(dirName) {
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
        fs.copySync(DEFAULTS_DIR, './'+dirName);
        process.chdir(process.cwd()+'/'+dirName);
        console.log('Installing npm modules, this may take a while...');
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