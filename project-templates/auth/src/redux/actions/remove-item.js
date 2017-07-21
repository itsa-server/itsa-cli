var action = function(index) {
    return {
        type: 'REMOVE_ITEM',
        index: index
    };
};

module.exports = action;
