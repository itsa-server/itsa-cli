'use strict';

var Reflux = require('reflux'),
    constants = require('./constants'),
    actions;

actions = [
    constants.SEND_SCROLL_AMOUNT,
    constants.SEND_ROUTE_STATE
];

module.exports = Reflux.createActions(actions);