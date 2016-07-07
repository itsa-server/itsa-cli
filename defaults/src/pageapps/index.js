'use strict';

var PageAppClass = require('itsa-apps/app-classes/PageAppClass');

var SubApp = PageAppClass.subClass(function() {
        // inititiate anything here
},
    {
        destroy: function() {
            // destroy anything here
        }
    }
);

module.exports = SubApp;