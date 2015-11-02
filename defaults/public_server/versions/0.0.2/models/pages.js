'use strict';

const fsMD = require('itsa-react-fs-markdown')(__dirname);
const menulabels = require('../modules/menulabels');

const model = (options, language) => {
    // this === request
    const pageheaderPromise = fsMD.readFile('../markdowns/'+language+'/pages-header.MD');
    const pagecontentPromise = fsMD.readFile('../markdowns/'+language+'/pages-content.MD');

    return Promise.all([pageheaderPromise, pagecontentPromise])
        .then(response => {
            return {
                pageheader: response[0],
                pagecontent: response[1],
                messages: menulabels.getLabels(language)
            };
        }
    );
};

module.exports = model;