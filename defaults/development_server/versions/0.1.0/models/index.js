'use strict';

const menulabels = require('../modules/menulabels');

const model = (options, language) => {
    // this === request
    const languageFile = require('../languages/'+language+'.json') || {};

    const features_first = [
        languageFile['Design react jsx pages'],
        languageFile['Autobuild with webpack'],
        languageFile['Ultrafast (1-3 requests)'],
        languageFile['MVC driven'],
        languageFile['Modeldata available on server and client'],
        languageFile['Automaticly serverside- and clientside rendered'],
        languageFile['Easy internationalization'],
        languageFile['Automatic clientside routing'],
        languageFile['Automatic cleanup code and css of not used pages']
    ];

    const features_second = [
        languageFile['Build different pages for desktop, tablet and phones'],
        languageFile['Great separation of concerns'],
        languageFile['Automaticly Google analytics integration'],
        languageFile['Integrated markdown support'],
        languageFile['Integrated SCSS support'],
        languageFile['Reflux integration'],
        languageFile['Optionally caching state in localstorage'],
        languageFile['Written in ES6']
    ];

    let messages = menulabels.getLabels(language);
    messages.features_first = features_first;
    messages.features_second = features_second;
    messages.licenced = languageFile['is licensed under the'];
    messages.intro_react_server = languageFile['intro-react-server'];
    messages.why_this_framework = languageFile['why-this-framework'];
    messages.why_this_framework_content = languageFile['why-this-framework-content'];
    return {
        messages: messages
    };

};

module.exports = model;