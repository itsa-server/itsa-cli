'use strict';

require('itsa-jsext');

var todos = function(state, action) {
    var newState;
    if (state===undefined) {
        state = [];
    }
    if (action.type==='ADD_ITEM') {
        newState = state.itsa_deepClone();
        newState.push(action.item);
        return newState;
    }
    else if (action.type==='REMOVE_ITEM') {
        newState = state.itsa_deepClone();
        newState.splice(action.index, 1);
        return newState;
    }
    return state;
};

module.exports = todos;