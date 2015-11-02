'use strict';

const React = require('react');

//TEXTObjectStringToDates looks pretty ugly, but we need it in text-form
// it is the js-uglyfied version of the module object-string-to-date.js
const TEXTObjectStringToDates = '!function(){"use strict";var t,n,r,e,o,c,i;i=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,t={undefined:!0,number:!0,"boolean":!0,string:!0,"[object Function]":!0,"[object RegExp]":!0,"[object Array]":!0,"[object Date]":!0,"[object Error]":!0,"[object Blob]":!0,"[object Promise]":!0},c=function(t){return i.test(t)?new Date(t):null},n=function(n){return!(t[typeof n]||t[{}.toString.call(n)]||!n||n instanceof Promise)},r=function(t,n){for(var r,e=Object.keys(t),o=e.length,c=-1;++c<o;)r=e[c],n.call(t,t[r],r,t)},e=function(t){var i;r(t,function(r,a){"string"==typeof r?(i=c(r))&&(t[a]=i):n(r)?e(r):Array.isArray(r)&&o(r)})},o=function(t){var r;t.forEach(function(i,a){"string"==typeof i?(r=c(i))&&(t[a]=r):n(i)?e(i):Array.isArray(i)&&o(i)})},Object.stringToDates=function(t){return e(t),t}}();';

const TransferedProperties = React.createClass({
    render() {
        const scriptContent = {
            __html: TEXTObjectStringToDates+
                    'window.__itsa_react_server||(window.__itsa_react_server={});'+
                    'try {'+
                        'window.__itsa_react_server.props=Object.stringToDates(eval('+this.props.stringifiedProps+'))'+
                    '}'+
                    'catch(e) {'+
                        'console.warn(e);window.__itsa_react_server.props={}'+
                    '}'
        };
        return (
            <script dangerouslySetInnerHTML={scriptContent} />
        );
    }
});

module.exports = TransferedProperties;