Itsa-server has a controller on the serverside, and can optionally run a controller on the client.

# Serverside controller

The serverside controller is active by the framework. You just define your route-file and whenever reply.reactview gets invoked, the view will be rendered with the proper modeldata.

# Clientside controller

There are 2 ways the client can recieve the controller: a plain controller that you need to manage yourself, or by making use of our clientside router, which uses this controller internally. The latter is strongly preferred.

For both ways, you need to setup `app.js` which lies in the root-folder of the develop-application.

## Using just the controller

To get the controller on the client, your `app.js` should look like this:

```js
const controller = require('itsa-client-controller');
```

The controller contains `this.props` which also was used on the server, and some other information. See the docs of Itsa-controller for more info.

## Using itsa-react-router

The prefereed way, is to make use of `itsa-react-router`. This module makes use of the controller, however it takes fully charge of how to manage this, based upon `routes.js` that is defined on the server. This all works automaticly: the serverside route-data will be available on the client (that is: the part that is appropriate on the client).

Now, `app.js` should look like this:

```js
var ItsaRouterClass = require('itsa-react-router');
new ItsaRouterClass();
```

itsa-react-router is a very convenient way to setup clientside routing. You just need the above code, that's it! Behind the scenes, it will inspect anchor-clicks (delegated), prevent default-action whenever there is a match with the server's `routes.js` file and make an ajax-request if needed.