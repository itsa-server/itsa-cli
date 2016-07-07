/*global describe, it, before, after, beforeEach */

'use strict';

var expect = require('chai').expect,
    appStore = require('../redux/app-store'),
    actionReset = require('../redux/actions/reset-counter'),
    actionIncrement = require('../redux/actions/increment-counter'),
    actionDecrement = require('../redux/actions/decrement-counter');


describe('Reducer', function() {
    var store;

    // Code to execute before test-group.
    before(function() {
        store = appStore.createStore();
    });

    // Code to execute before each test.
    beforeEach(function() {
        store.dispatch(actionReset());
    });

    // Code to execute after test-group.
    after(function() {
    });

    it('test initial state', function() {
        expect(store.getState().count).to.be.eql(0);
    });

    it('test increment', function() {
        store.dispatch(actionIncrement());
        expect(store.getState().count).to.be.eql(1);
    });

    it('test decrement', function() {
        store.dispatch(actionDecrement());
        expect(store.getState().count).to.be.eql(-1);
    });

    it('test reset', function() {
        store.dispatch(actionIncrement());
        store.dispatch(actionReset());
        expect(store.getState().count).to.be.eql(0);
    });

});