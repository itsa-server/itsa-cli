'use strict';

var Reflux = require('reflux'),
    constants = require('../constants/app-constants'),
    actions;

actions = [
    constants.TOGGLE_MENU
];

module.exports = Reflux.createActions(actions);