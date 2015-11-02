'use strict';

var Reflux = require('reflux'),
    constants = require('./constants'),
    actions;

actions = [
    constants.TOGGLE_MENU
];

module.exports = Reflux.createActions(actions);