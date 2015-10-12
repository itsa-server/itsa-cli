/*eslint no-empty: 0*/

'use strict';

var fs = require('fs-extra'),
    DEFAULTS_DIR = '/usr/local/lib/node_modules/itsa-cli/defaults/',
    files;

var createApp = dirName => {
    try {
        fs.accessSync(dirName);
        // if this succeeds, then dirname exists and we should break
        console.log('It seems there already exists an application with this filename');
        return;
    }
    catch(err) {}

    // now we can create the app-directory with default content
    try {
        fs.mkdirSync(dirName);
        files = fs.readdirSync(dirName);
        // files.forEach(file => fs.copySync(DEFAULTS_DIR+'file', './'+dirName+'/'+file));
        files.forEach(file => {
            console.log(DEFAULTS_DIR+'file --> ./'+dirName+'/'+file);
        });
    }
    catch(err) {
        console.log(err);
    }
};

module.exports = createApp;