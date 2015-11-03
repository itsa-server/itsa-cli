/*eslint no-empty: 0*/

'use strict';

var fs = require('fs-extra'),
    DEFAULTS_DIR = '/usr/local/lib/node_modules/itsa-cli/defaults',
    createApp;

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
        fs.copySync(DEFAULTS_DIR, './'+dirName);
    }
    catch(err) {
        console.log(err);
    }
};

module.exports = createApp;