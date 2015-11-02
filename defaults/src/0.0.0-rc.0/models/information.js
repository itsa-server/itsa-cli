'use strict';

const fsMD = require('itsa-react-fs-markdown')(__dirname); //<-- de huidige map moet worden doorgegeven als argument

const model = (options, language) => {
    // this === request
    const langfile = require('../languages/'+language+'.json'); // synchronous
    const pagecontentPromise = fsMD.readFile('../markdowns/'+language+'/information.MD'); // asynchronous

    return pagecontentPromise.then(response => {
        // modellen moeten een object retourneren
        // in dit geval krijgt de view toegang tot this.props.pagecontent
        // de response ziet er uit als: {__html: ''}
        return {
            pagecontent: response,
            hello: langfile.hello
        };
    });
};

module.exports = model;