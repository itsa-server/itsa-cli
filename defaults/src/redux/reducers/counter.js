'use strict';

var counter = function(state, action) {
    var newState;
    if (state===undefined) {
        state = 0;
    }
    if (action.type==='INCREMENT_COUNTER') {
        newState = state;
        newState++;
        return newState;
    }
    else if (action.type==='DECREMENT_COUNTER') {
        newState = state;
        newState--;
        return newState;
    }
    else if (action.type==='RESET_COUNTER') {
        return 0;
    }
    return state;
};

module.exports = counter;