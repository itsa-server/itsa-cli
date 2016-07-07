'use strict';

var fsMD = require('itsa-react-fs-markdown')(__dirname); //<-- de huidige map moet worden doorgegeven als argument

var model = function(options, language) {
    // this === request
    var langfile = require('../languages/'+language+'.json'), // synchronous
        pagecontentPromise = fsMD.readFile('../markdowns/'+language+'/information.MD'); // asynchronous

    return pagecontentPromise.then(function(response) {
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