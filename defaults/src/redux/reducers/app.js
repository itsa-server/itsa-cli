'use strict';
var counter = require('./counter'),
    todos = require('./todos'),
    Redux = require('redux');

var appReducer = Redux.combineReducers({
    count: counter,
    todos: todos
});

module.exports = appReducer;