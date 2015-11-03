'use strict';

var Reflux = require('reflux'),
    actions = require('../actions/app-actions'),
    ItsaRefluxClientStorage = require('itsa-reflux-clientstorage'),
    menuActivated, store;

store = Reflux.createStore({
    mixins: [ItsaRefluxClientStorage],

    listenables: [actions],

    onToggleMenu: function() {
        menuActivated = !menuActivated;
        this.trigger({menuActivated: menuActivated});
    },

    getInitialState: function() {
        var initialSate = {
                menuActivated: false
            },
            state = this.readStateFromClientStorage(initialSate);
        menuActivated = state.menuActivated;
        return state;
    }
});

module.exports = store;