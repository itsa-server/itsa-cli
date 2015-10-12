/*eslint no-empty: 0*/

'use strict';

var fs = require('fs'),
    wrench = require('wrench'),
    DEFAULTS_DIR = '/usr/local/lib/node_modules/itsa-cli/defaults/',
    files;

transformHiddenFile

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
        wrench.copyDirSyncRecursive(DEFAULTS_DIR, './'+dirName, {
            excludeHiddenUnix: false
        });
        // files = fs.readdirSync(DEFAULTS_DIR);
        // files.forEach(file => fs.copySync(DEFAULTS_DIR+file, './'+dirName+'/'+   file   ));
    }
    catch(err) {
        console.log(err);
    }
};

module.exports = createApp;