(function() {
    'use strict';
    var TYPES, isObject, objEach, objectStringToDates, arrayStringToDates, stringToDate, DATEPATTERN;

    DATEPATTERN = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/;

    TYPES = {
       'undefined' : true,
       'number' : true,
       'boolean' : true,
       'string' : true,
       '[object Function]' : true,
       '[object RegExp]' : true,
       '[object Array]' : true,
       '[object Date]' : true,
       '[object Error]' : true,
       '[object Blob]' : true,
       '[object Promise]' : true // DOES NOT WORK in all browsers
    };

    stringToDate = function(string) {
        return DATEPATTERN.test(string) ? new Date(string) : null;
    };

    /**
    * Returns true if the item is an object, but no Array, Function, RegExp, Date or Error object
    *
    * @method isObject
    * @static
    * @return {Boolean} true if the object is empty
    */
    isObject = function (item) {
       // cautious: some browsers detect Promises as [object Object] --> we always need to check instance of :(
       return !!(!TYPES[typeof item] && !TYPES[({}.toString).call(item)] && item && (!(item instanceof Promise)));
    };

    objEach = function (obj, fn) {
        var keys = Object.keys(obj),
            l = keys.length,
            i = -1,
            key;
        while (++i < l) {
            key = keys[i];
            fn.call(obj, obj[key], key, obj);
        }
    };

    objectStringToDates = function(obj) {
        var date;
        objEach(obj, function(value, key) {
            if (typeof value==='string') {
                (date=stringToDate(value)) && (obj[key]=date);
            }
            else if (isObject(value)) {
                objectStringToDates(value);
            }
            else if (Array.isArray(value)) {
                arrayStringToDates(value);
            }
        });
    };

    arrayStringToDates = function(array) {
        var date;
        array.forEach(function(arrayItem, i) {
            if (typeof arrayItem==='string') {
                (date=stringToDate(arrayItem)) && (array[i]=date);
            }
            else if (isObject(arrayItem)) {
                objectStringToDates(arrayItem);
            }
            else if (Array.isArray(arrayItem)) {
                arrayStringToDates(arrayItem);
            }
        });
    };

    Object.stringToDates = function (item) {
        objectStringToDates(item);
        return item;
    };

}());
