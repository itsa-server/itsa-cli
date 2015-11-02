'use strict';

const fsMD = require('itsa-react-fs-markdown')(__dirname);
const model = (options, language) => {
    // this === request

    var languageFile = require('../languages/'+language+'.json');
    var pagecontentPromise = fsMD.readFile('../markdowns/'+language+'/index.MD');
    var data = {
        helloWorld: languageFile['Hello World'] || 'Hello World'
    };

    return pagecontentPromise.then(pagecontent => {
        data.pagecontent = pagecontent;
        return data;
    }).catch(() => {
        return data;
    });

};

module.exports = model;