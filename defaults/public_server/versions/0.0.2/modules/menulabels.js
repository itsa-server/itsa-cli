'use strict';

const Labels = {
    getLabels(language) {
        const languageFile = require('../languages/'+language+'.json') || {};
        return {
            installation: languageFile['Installation'] || 'Installation',
            configuration: languageFile['Configuration'] || 'Configuration',
            pages: languageFile['Pages'] || 'Pages',
            models: languageFile['Models'] || 'Models',
            'async-models': languageFile['Async Models'] || 'Async Models',
            environments: languageFile['Environments'] || 'Environments',
            router: languageFile['Router'] || 'Router',
            developing: languageFile['Developing'] || 'Developing',
            production: languageFile['Production'] || 'Production',
            gulp: languageFile['Gulp commands'] || 'Gulp commands',
            setup: languageFile['Setup'] || 'Setup',
            create: languageFile['Create'] || 'Create',
            build: languageFile['Build'] || 'Build'
        };
    }
};

module.exports = Labels;