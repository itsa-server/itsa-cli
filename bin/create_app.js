/*eslint no-empty: 0*/

'use strict';

var fs = require('fs-extra'),
    DEFAULTS_DIR = '/usr/local/lib/node_modules/itsa-cli/defaults/',
    files, createApp, findHiddenFiles;

// we couldn't find a module that copied hidden files well. Thus hidden files are kept with leading underscore
// and made hidden when copied
findHiddenFiles = filename => {
    var remaining = filename.substr(1),
        firstCharacter = (filename[0]==='_') ? '.' : filename[0];
    return firstCharacter + remaining;
};

createApp = dirName => {
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
        files = fs.readdirSync(DEFAULTS_DIR);
        files.forEach(file => fs.copySync(DEFAULTS_DIR+file, './'+dirName+'/'+findHiddenFiles(file)));
    }
    catch(err) {
        console.log(err);
    }
};

module.exports = createApp;