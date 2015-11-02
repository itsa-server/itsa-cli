'use strict';

const menulabels = require('../modules/menulabels');

const model = (options, language) => {
    // this === request
    return {
        messages: menulabels.getLabels(language)
    };

};

module.exports = model;