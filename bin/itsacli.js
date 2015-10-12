#!/usr/bin/env node

'use strict';

var args = process.argv,
    action = args[2],
    createApp = require('./create_app'),
    validApp = /[a-zA-Z]+/,
    subaction;

if (action==='create') {
    subaction = args[3];
    if (subaction && validApp.test(subaction)) {
        createApp(subaction);
    }
    else {
        console.log('itsacli --> invalid arguments');
    }
}
else {
    console.log('itsacli --> invalid arguments');
}
