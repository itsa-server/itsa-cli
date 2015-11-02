'use strict';

let menuActivated;

const Reflux = require('reflux'),
      actions = require('./actions'),
      ItsaRefluxClientStorage = require('itsa-reflux-clientstorage');

const store = Reflux.createStore({
    mixins: [ItsaRefluxClientStorage],

    listenables: [actions],

    onToggleMenu() {
        menuActivated = !menuActivated;
        this.trigger({menuActivated: menuActivated});
    },

    getInitialState() {
        let initialSate = {
                menuActivated: false
            },
            state = this.readStateFromClientStorage(initialSate);
        menuActivated = state.menuActivated;
        return state;
    }
});

module.exports = store;