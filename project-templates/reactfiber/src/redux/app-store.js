var Redux = require('redux'),
    appReducer = require('./reducers/app'),
    clientStorage = require('itsa-redux-clientstorage'),
    store, createStore;

createStore = function(initialState) {
    var state;
    if (!store) {
        state = clientStorage.readStateFromClientStorage(initialState);
        store = Redux.createStore(appReducer, state);
        clientStorage.watch(store);
    }
    return store;
};

module.exports = {
    createStore: createStore,
    getState: createStore().getState,
    dispatch: createStore().dispatch,
    subscribe: createStore().subscribe,
    replaceReducer: createStore().replaceReducer
};
