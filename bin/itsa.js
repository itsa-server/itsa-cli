#!/usr/bin/env node

'use strict';

const args = process.argv,
    action = args[2] || '',
    actionSplitted = action.split('@'),
    createApp = require('./create-app'),
    validApp = /^[\w.-]+$/,
    subaction = args[3];

let template;

if (actionSplitted[0]==='create') {
    template = actionSplitted[1] || 'basic';
    if (subaction && validApp.test(subaction)) {
        createApp(template, subaction);
    }
    else {
        console.log('itsacli --> invalid arguments');
    }
}
else {
    console.log('itsacli --> invalid arguments');
}
