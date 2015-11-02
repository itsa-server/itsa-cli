'use strict';

var Reflux = require('reflux'),
    actions = require('./actions'),
    ItsaRefluxClientStorage = require('itsa-reflux-clientstorage'),
    store;

store = Reflux.createStore({
    data: {scrollamount: 5, dummy: 2},
    increaseScrollAmount() {
        this.data.scrollamount++;
        this.trigger({scrollamount: this.data.scrollamount});
    },
    mixins: [ItsaRefluxClientStorage],
    listenables: [actions],
    getInitialState: function() {
        let initialSate = this.data;
        return this.readStateFromClientStorage(initialSate);
    }
});

module.exports = store;