The router should be defined inside the file `routes.js`. This is the place where you define your routes. This file will also be used to generate the proper clientside route information, which can be used inside a client-side router (like itsa-react-router).

# Structure routes.js

Routes.js should be a commonjs file that exports an array of route-objects:

### Example routes.js file
```js
'use strict';

const routes = [
    {
        method: 'GET',
        path: '/',
        handler(request, reply) {
            reply.reactview('index', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/help',
        handler(request, reply) {
            reply.reactview('help');
        }
    }
];

module.exports = routes;
```

The structure is based upon Hapi: see the [Hapi.js docs](http://hapijs.com) for more info.

Itsa-server makes sure that the reply-object has three additional methods:

* **reactview()** <-- response the specified view
* **file()** <-- response a file (by [Inert](https://github.com/hapijs/inert))
* **action()** <-- performs a specific action, used to handle ajax-request (W.I.P)