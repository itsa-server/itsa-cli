webpackJsonp([2],Array(24).concat([function(e,t,n){"use strict";var r="faq";r&&(r=null);var o=n(459),i=n(548);console.info("FAQ"),n(553),n(552);var a=n(435),s=n(551),u=o.createClass({displayName:"Body",mixins:[a.connect(s)],render:function(){return o.createElement("div",null,o.createElement("h1",null,this.props.helloWorld," I am FAQ"),o.createElement("h2",null,"my view: ",this.props.__view),o.createElement("h2",null,"my modeldata: ",this.props.modelenv),o.createElement(i,this.props))}});e.exports=u},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,3,[300,417,386,375,377],[366,388],6,[260,402],[277,439,386,376,493,395,420,421,406,422,375,374,402,389,377],[310,390,393,386,376,400,419,394,395,443,387,396,422,382,409,449,525,428,374,430,431,377],[324,411,384,386,387,396,408,375,374,377],function(e,t,n){"use strict";function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o(e,n){return n=n||"on",n+t.capitalize(e)}function i(e){var t=typeof e;return"function"===t||"object"===t&&!!e}function a(e){if(!i(e))return e;for(var t,n,r=1,o=arguments.length;o>r;r++){t=arguments[r];for(n in t)if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var a=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,a)}else e[n]=t[n]}return e}function s(e){return"function"==typeof e}function u(e,t){for(var n={},r=0;r<e.length;r++)n[e[r]]=t[r];return n}function c(e){return"object"==typeof e&&"callee"in e&&"number"==typeof e.length}function l(e,t){if(e)throw Error(t||e)}Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=r,t.callbackName=o,t.isObject=i,t.extend=a,t.isFunction=s,t.object=u,t.isArguments=c,t.throwIf=l,t.EventEmitter=n(539),t.nextTick=function(e){setTimeout(e,0)}},[271,374],[273,450],13,14,15,16,[255,374],[331,384,375,388,427],function(e,t,n){"use strict";var r=n(383),o=n(463).instanceJoinCreator,i=function(e){for(var t,n=0,r={};n<(e.children||[]).length;++n)t=e.children[n],e[t]&&(r[t]=e[t]);return r},a=function s(e){var t={};for(var n in e){var o=e[n],a=i(o),u=s(a);t[n]=o;for(var c in u){var l=u[c];t[n+r.capitalize(c)]=l}}return t};e.exports={hasListener:function(e){for(var t,n,r,o=0;o<(this.subscriptions||[]).length;++o)for(r=[].concat(this.subscriptions[o].listenable),t=0;t<r.length;t++)if(n=r[t],n===e||n.hasListener&&n.hasListener(e))return!0;return!1},listenToMany:function(e){var t=a(e);for(var n in t){var o=r.callbackName(n),i=this[o]?o:this[n]?n:void 0;i&&this.listenTo(t[n],i,this[o+"Default"]||this[i+"Default"]||i)}},validateListening:function(e){return e===this?"Listener is not able to listen to itself":r.isFunction(e.listen)?e.hasListener&&e.hasListener(this)?"Listener cannot listen to this listenable because of circular loop":void 0:e+" is missing a listen method"},listenTo:function(e,t,n){var o,i,a,s=this.subscriptions=this.subscriptions||[];return r.throwIf(this.validateListening(e)),this.fetchInitialState(e,n),o=e.listen(this[t]||t,this),i=function(){var e=s.indexOf(a);r.throwIf(-1===e,"Tried to remove listen already gone from subscriptions list!"),s.splice(e,1),o()},a={stop:i,listenable:e},s.push(a),a},stopListeningTo:function(e){for(var t,n=0,o=this.subscriptions||[];n<o.length;n++)if(t=o[n],t.listenable===e)return t.stop(),r.throwIf(-1!==o.indexOf(t),"Failed to remove listen from subscriptions list!"),!0;return!1},stopListeningToAll:function(){for(var e,t=this.subscriptions||[];e=t.length;)t[0].stop(),r.throwIf(t.length!==e-1,"Failed to remove listen from subscriptions list!")},fetchInitialState:function(e,t){t=t&&this[t]||t;var n=this;if(r.isFunction(t)&&r.isFunction(e.getInitialState)){var o=e.getInitialState();o&&r.isFunction(o.then)?o.then(function(){t.apply(n,arguments)}):t.call(this,o)}},joinTrailing:o("last"),joinLeading:o("first"),joinConcat:o("all"),joinStrict:o("strict")}},[274,379,398,438,494,448,375,429],[308,447,374],32,[319,500,400],[256,390,535,377],[262,438,412,423,424,374],[265,379,398,423,424],[301,376,404,421,406,386,405,453,374,377],[337,391,427],[356,374],[249,451],[305,376,377],[313,375,374],50,[335,401,448,426],[339,374],53,54,[252,384,375,374],[264,379,374],[268,445,374],[269,393,423,424,374],[279,440,381],[280,374],[282,375,409,377],[285,437,390,397,393,415,381,497,387,375,410,374,429,389,377],[302,376,395,374],67,[315,402],[323,420,386,376,395,382,375,374,377],[340,374],71,72,73,74,[353,478,419,405,375,374,377],[354,378],[361,378],[363,377],function(e,t){"use strict";t.createdStores=[],t.createdActions=[],t.reset=function(){for(;t.createdStores.length;)t.createdStores.pop();for(;t.createdActions.length;)t.createdActions.pop()}},function(e,t,n){"use strict";var r=n(383);e.exports={preEmit:function(){},shouldEmit:function(){return!0},listen:function(e,t){t=t||this;var n=function(n){o||e.apply(t,n)},r=this,o=!1;return this.emitter.addListener(this.eventLabel,n),function(){o=!0,r.emitter.removeListener(r.eventLabel,n)}},trigger:function(){var e=arguments,t=this.preEmit.apply(this,e);e=void 0===t?e:r.isArguments(t)?t:[].concat(t),this.shouldEmit.apply(this,e)&&this.emitter.emit(this.eventLabel,e)},triggerAsync:function(){var e=arguments,t=this;r.nextTick(function(){t.trigger.apply(t,e)})},deferWith:function(e){var t=this.trigger,n=this,r=function(){t.apply(n,arguments)};this.trigger=function(){e.apply(n,[r].concat([].splice.call(arguments,0)))}}}},function(e,t,n){"use strict";var r=n(383),o=n(392);e.exports=r.extend({componentWillUnmount:o.stopListeningToAll},o)},function(e,t,n){"use strict";var r=n(542);r.connect=n(544),r.connectFilter=n(545),r.ListenerMixin=n(434),r.listenTo=n(546),r.listenToMany=n(547),e.exports=r},89,[251,436,378,517,521,528,531,377],[263,374],[278,422,374,377],[287,437,467,397,381,387,374,430],[294,397,415,418,375,410],[307,487,449,451,452],[309,515],[312,402],[316,376,404,406,388],[317,384,393,375],100,101,[342,529],[347,386,395,381,374,456,377],104,105,106,[350,378,374],[351,378],109,110,[365,376,404,394,453,374,377],[367,475],function(e,t){"use strict";e.exports={}},function(e,t){"use strict";e.exports={}},function(e,t,n){"use strict";var r=n(383),o=n(432),i=n(543),a=n(540),s={preEmit:1,shouldEmit:1};e.exports=function(e){function t(){var t,n=0;if(this.subscriptions=[],this.emitter=new r.EventEmitter,this.eventLabel="change",a(this,e),this.init&&r.isFunction(this.init)&&this.init(),this.listenables)for(t=[].concat(this.listenables);n<t.length;n++)this.listenToMany(t[n])}var u=n(461),c=n(433),l=n(392);e=e||{};for(var p in u)if(!s[p]&&(c[p]||l[p]))throw new Error("Cannot override API method "+p+" in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");for(var d in e)if(!s[d]&&(c[d]||l[d]))throw new Error("Cannot override API method "+d+" in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");e=i(e),r.extend(t.prototype,l,c,u,e);var f=new t;return o.createdStores.push(f),f}},function(e,t,n){"use strict";function r(e,t,n){return function(){var r,o=n.subscriptions,i=o?o.indexOf(e):-1;for(u.throwIf(-1===i,"Tried to remove join already gone from subscriptions list!"),r=0;r<t.length;r++)t[r]();o.splice(i,1)}}function o(e){e.listenablesEmitted=new Array(e.numberOfListenables),e.args=new Array(e.numberOfListenables)}function i(e,t){return function(){var n=c.call(arguments);if(t.listenablesEmitted[e])switch(t.strategy){case"strict":throw new Error("Strict join failed because listener triggered twice.");case"last":t.args[e]=n;break;case"all":t.args[e].push(n)}else t.listenablesEmitted[e]=!0,t.args[e]="all"===t.strategy?[n]:n;a(t)}}function a(e){for(var t=0;t<e.numberOfListenables;t++)if(!e.listenablesEmitted[t])return;e.callback.apply(e.listener,e.args),o(e)}var s=n(462),u=n(383),c=Array.prototype.slice,l={strict:"joinStrict",first:"joinLeading",last:"joinTrailing",all:"joinConcat"};t.staticJoinCreator=function(e){return function(){var t=c.call(arguments);return s({init:function(){this[l[e]].apply(this,t.concat("triggerAsync"))}})}},t.instanceJoinCreator=function(e){return function(){u.throwIf(arguments.length<2,"Cannot create a join with less than 2 listenables!");var t,n,a=c.call(arguments),s=a.pop(),l=a.length,p={numberOfListenables:l,callback:this[s]||s,listener:this,strategy:e},d=[];for(t=0;l>t;t++)u.throwIf(this.validateListening(a[t]));for(t=0;l>t;t++)d.push(a[t].listen(i(t,p),this));return o(p),n={listenable:a},n.stop=r(n,d,this),this.subscriptions=(this.subscriptions||[]).concat(n),n}}},[250,379,399,378,472,508,511,389],[253,379,398,399,378,382,391,429,457,389],141,[254,468,444,536,374],[257,378,520,388,454,374],[258,389],[259,379,399,407,381,389],[261,388],[266,384,375,455],[267,390,378],[270,379,388],[272,412,477,439,380,417,386,376,400,479,441,490,394,381,387,445,396,501,375,450,532,378],[275,396,522,428,431],[276,384,404,458,377],[281,416,417,386,376,400,395,420,405,387,421,406,396,382,375,409,374,431,377],[283,376,400,530],[284,403,385,380,376,402],[286,379,414,385,380,376],[288,379,414,385,380,376],[289,379,414,385,380,376],[290,403,397,413,385,380,376,381,382,375,374],[291,385,380,376,377],[292,403,413,385,380,376,382,375],[293,378,524,455],[295,403,397,413,385,380,376,382,375,374,377],[296,382,408,375,388],[297,464,465,466,469,470,378,473,474,385,380,415,489,418,480,481,483,440,482,484,485,486,488,441,376,495,496,394,381,499,504,505,506,503,519,491],[298,390,492,381,387,534],[299,375],168,[303,398],[304,471,378,384,394,381,382,375,427,526],[306,390,398,416,380,419,393,405,418,387,447,382],[311,416,444,396,476],[314,374],[318,411,384,393,442,446,408,375],[320,498],[321,376,394,443,502,409,428,374],[322,384,411,446,408,375,388],[325,390],[326,379,399,442,391,452,457,389,537],180,[327,379,412,399,507,391,510,512,407,509,513,401,514,425,374,389,377],[328,391],[329,391],[330,407],[332,401],[333,391],[334,401,425,523,426],[336,401,426],[338,407],190,191,[341,516],[343,538],[344,380,376,374],[345,378,518,454,374],[346,436],[348,458,377],[349,425],199,200,201,202,[352,527],[355,456],205,206,[357,376,374],[358,378],[359,533],[360,410],[362,378,410,430],212,[364,374],function(e,t,n){"use strict";function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(){}var i="function"!=typeof Object.create?"~":!1;o.prototype._events=void 0,o.prototype.listeners=function(e,t){var n=i?i+e:e,r=this._events&&this._events[n];if(t)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var o=0,a=r.length,s=new Array(a);a>o;o++)s[o]=r[o].fn;return s},o.prototype.emit=function(e,t,n,r,o,a){var s=i?i+e:e;if(!this._events||!this._events[s])return!1;var u,c,l=this._events[s],p=arguments.length;if("function"==typeof l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),p){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,r),!0;case 5:return l.fn.call(l.context,t,n,r,o),!0;case 6:return l.fn.call(l.context,t,n,r,o,a),!0}for(c=1,u=new Array(p-1);p>c;c++)u[c-1]=arguments[c];l.fn.apply(l.context,u)}else{var d,f=l.length;for(c=0;f>c;c++)switch(l[c].once&&this.removeListener(e,l[c].fn,void 0,!0),p){case 1:l[c].fn.call(l[c].context);break;case 2:l[c].fn.call(l[c].context,t);break;case 3:l[c].fn.call(l[c].context,t,n);break;default:if(!u)for(d=1,u=new Array(p-1);p>d;d++)u[d-1]=arguments[d];l[c].fn.apply(l[c].context,u)}}return!0},o.prototype.on=function(e,t,n){var o=new r(t,n||this),a=i?i+e:e;return this._events||(this._events=i?{}:Object.create(null)),this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],o]:this._events[a].push(o):this._events[a]=o,this},o.prototype.once=function(e,t,n){var o=new r(t,n||this,!0),a=i?i+e:e;return this._events||(this._events=i?{}:Object.create(null)),this._events[a]?this._events[a].fn?this._events[a]=[this._events[a],o]:this._events[a].push(o):this._events[a]=o,this},o.prototype.removeListener=function(e,t,n,r){var o=i?i+e:e;if(!this._events||!this._events[o])return this;var a=this._events[o],s=[];if(t)if(a.fn)(a.fn!==t||r&&!a.once||n&&a.context!==n)&&s.push(a);else for(var u=0,c=a.length;c>u;u++)(a[u].fn!==t||r&&!a[u].once||n&&a[u].context!==n)&&s.push(a[u]);return s.length?this._events[o]=1===s.length?s[0]:s:delete this._events[o],this},o.prototype.removeAllListeners=function(e){return this._events?(e?delete this._events[i?i+e:e]:this._events=i?{}:Object.create(null),this):this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=i,e.exports=o},function(e,t){"use strict";e.exports=function(e,t){for(var n in t)if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var r=Object.getOwnPropertyDescriptor(t,n);if(!r.value||"function"!=typeof r.value||!t.hasOwnProperty(n))continue;e[n]=t[n].bind(e)}else{var o=t[n];if("function"!=typeof o||!t.hasOwnProperty(n))continue;e[n]=o.bind(e)}return e}},function(e,t,n){"use strict";var r=n(383),o=n(460),i=n(433),a=n(432),s={preEmit:1,shouldEmit:1},u=function c(e){e=e||{},r.isObject(e)||(e={actionName:e});for(var t in o)if(!s[t]&&i[t])throw new Error("Cannot override API method "+t+" in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.");for(var n in e)if(!s[n]&&i[n])throw new Error("Cannot override API method "+n+" in action creation. Use another method name or override it on Reflux.PublisherMethods instead.");e.children=e.children||[],e.asyncResult&&(e.children=e.children.concat(["completed","failed"]));for(var u=0,l={};u<e.children.length;u++){var p=e.children[u];l[p]=c(p)}var d=r.extend({eventLabel:"action",emitter:new r.EventEmitter,_isAction:!0},i,o,e),f=function h(){var e=h.sync?"trigger":"triggerAsync";return h[e].apply(h,arguments)};return r.extend(f,l,d),a.createdActions.push(f),f};e.exports=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={version:{"reflux-core":"0.3.0"}};r.ActionMethods=n(460),r.ListenerMethods=n(392),r.PublisherMethods=n(433),r.StoreMethods=n(461),r.createAction=n(541),r.createStore=n(462);var o=n(463).staticJoinCreator;r.joinTrailing=r.all=o("last"),r.joinLeading=o("first"),r.joinStrict=o("strict"),r.joinConcat=o("all");var i=r.utils=n(383);r.EventEmitter=i.EventEmitter,r.Promise=i.Promise,r.createActions=function(){var e=function(e,t){Object.keys(e).forEach(function(n){var o=e[n];t[n]=r.createAction(o)})};return function(t){var n={};return t instanceof Array?t.forEach(function(t){i.isObject(t)?e(t,n):n[t]=r.createAction(t)}):e(t,n),n}}(),r.setEventEmitter=function(e){r.EventEmitter=i.EventEmitter=e},r.nextTick=function(e){i.nextTick=e},r.use=function(e){e(r)},r.__keep=n(432),Function.prototype.bind||console.error("Function.prototype.bind not available. ES5 shim required. https://github.com/spoike/refluxjs#es5"),t["default"]=r,e.exports=t["default"]},function(e,t,n){"use strict";var r=n(383);e.exports=function(e){var t={init:[],preEmit:[],shouldEmit:[]},n=function o(e){var n={};return e.mixins&&e.mixins.forEach(function(e){r.extend(n,o(e))}),r.extend(n,e),Object.keys(t).forEach(function(n){e.hasOwnProperty(n)&&t[n].push(e[n])}),n}(e);return t.init.length>1&&(n.init=function(){var e=arguments;t.init.forEach(function(t){t.apply(this,e)},this)}),t.preEmit.length>1&&(n.preEmit=function(){return t.preEmit.reduce(function(e,t){var n=t.apply(this,e);return void 0===n?e:[n]}.bind(this),arguments)}),t.shouldEmit.length>1&&(n.shouldEmit=function(){var e=arguments;return!t.shouldEmit.some(function(t){return!t.apply(this,e)},this)}),Object.keys(t).forEach(function(e){1===t[e].length&&(n[e]=t[e][0])}),n}},function(e,t,n){"use strict";var r=n(392),o=n(434),i=n(383);e.exports=function(e,t){return{getInitialState:function(){return i.isFunction(e.getInitialState)?void 0===t?e.getInitialState():i.object([t],[e.getInitialState()]):{}},componentDidMount:function(){i.extend(this,r);var n=this,o=void 0===t?this.setState:function(e){("undefined"==typeof n.isMounted||n.isMounted()===!0)&&n.setState(i.object([t],[e]))};this.listenTo(e,o)},componentWillUnmount:o.componentWillUnmount}}},function(e,t,n){"use strict";var r=n(392),o=n(434),i=n(383);e.exports=function(e,t,n){return n=i.isFunction(t)?t:n,{getInitialState:function(){if(i.isFunction(e.getInitialState)){if(i.isFunction(t))return n.call(this,e.getInitialState());var r=n.call(this,e.getInitialState());return"undefined"!=typeof r?i.object([t],[r]):{}}return{}},componentDidMount:function(){i.extend(this,r);var o=this,a=function(e){if(i.isFunction(t))o.setState(n.call(o,e));else{var r=n.call(o,e);o.setState(i.object([t],[r]))}};this.listenTo(e,a)},componentWillUnmount:o.componentWillUnmount}}},function(e,t,n){"use strict";var r=n(392);e.exports=function(e,t,n){return{componentDidMount:function(){for(var o in r)if(this[o]!==r[o]){if(this[o])throw"Can't have other property '"+o+"' when using Reflux.listenTo!";this[o]=r[o]}this.listenTo(e,t,n)},componentWillUnmount:r.stopListeningToAll}}},function(e,t,n){"use strict";var r=n(392);e.exports=function(e){return{componentDidMount:function(){for(var t in r)if(this[t]!==r[t]){if(this[t])throw"Can't have other property '"+t+"' when using Reflux.listenToMany!";this[t]=r[t]}this.listenToMany(e)},componentWillUnmount:r.stopListeningToAll}}},function(e,t,n){"use strict";var r=n(459),o=r.createClass({displayName:"Menu",render:function(){var e=this.props.__langprefix+"/",t=this.props.__langprefix+"/contact",n=this.props.__langprefix+"/contact/marco?a=9",o=this.props.__langprefix+"/faq",i=this.props.__langprefix+"/history",a="/en"+this.props.__uri,s="/nl"+this.props.__uri,u="/de"+this.props.__uri,c="/fr"+this.props.__uri,l="pure-menu-item",p=l+("en"===this.props.__lang?" pure-menu-selected":""),d=l+("nl"===this.props.__lang?" pure-menu-selected":""),f=l+("de"===this.props.__lang?" pure-menu-selected":""),h=l+("fr"===this.props.__lang?" pure-menu-selected":"");return r.createElement("div",{className:"pure-menu pure-menu-horizontal"},r.createElement("a",{href:"#",className:"pure-menu-heading pure-menu-a"},"MENU"),r.createElement("ul",{className:"pure-menu-list"},r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:e,className:"pure-menu-link"},"Home")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:t,className:"pure-menu-link"},"Contact")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:n,className:"pure-menu-link"},"Contact ",r.createElement("b",null,"Marco")," Asbreuk")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:o,className:"pure-menu-link"},"FAQ")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:i,className:"pure-menu-link"},"History"))),r.createElement("a",{href:"#",className:"pure-menu-heading pure-menu-a"},"LANGUAGE"),r.createElement("ul",{className:"pure-menu-list"},r.createElement("li",{className:p},r.createElement("a",{href:a,"data-setlang":"en",className:"pure-menu-link"},"EN")),r.createElement("li",{className:d},r.createElement("a",{href:s,"data-setlang":"nl",className:"pure-menu-link"},"NL")),r.createElement("li",{className:f},r.createElement("a",{href:u,"data-setlang":"de",className:"pure-menu-link"},"DE")),r.createElement("li",{className:h},r.createElement("a",{href:c,"data-setlang":"fr",className:"pure-menu-link"},"FR"))))}});e.exports=o},function(e,t,n){"use strict";var r,o=n(435),i=n(550);r=[i.SEND_SCROLL_AMOUNT,i.SEND_ROUTE_STATE],e.exports=o.createActions(r)},function(e,t){"use strict";var n={SEND_ROUTE_STATE:"sendRouteState",SEND_SCROLL_AMOUNT:"sendScrollAmount"};e.exports=n},function(e,t,n){"use strict";var r,o=n(435),i=n(549);r=o.createStore({listenables:[i],sendRouteState:function(e){this.trigger({currentroute:e})},sendScrollAmount:function(e){this.trigger({scrollamount:e})},getInitialState:function(){return{stateprop:"initial",scrollamount:0}}}),e.exports=r},function(e,t){},552]));