var action = function(description) {
    return {
        type: 'ADD_ITEM',
        item: {
            description: description
        }
    };
};

module.exports = action;
