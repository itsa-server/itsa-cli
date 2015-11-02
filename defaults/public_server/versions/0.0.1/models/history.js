'use strict';

const model = (options, language) => {
    // this === request
    var languageFile = require('../languages/'+language+'.json');
    var data = {
        helloWorld: languageFile['Hello World'] || 'Hello World',
        unreadCount: 1000
    };
    return data;
};

module.exports = model;