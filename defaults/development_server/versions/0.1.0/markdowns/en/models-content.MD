Every view will recieve **this.props** which can be used to render the component. The value of this.props will be created based upon three types of data (merged):

* predefined (double underscored) properties by the server
* data passed through by the route
* data defined inside a model-file

# Predefined data

Itsa-server will always pass through a **this.props**-object to the view. Some private properties are already pre-defined and always available: these properties have a signature of: **__propertyname**:

### Available pre-defined properties of this.props:

**__lang**: the current language (abreviation) that the client is using
**__langprefix**: language prefix which can be used when creating language uri's
**__locales**: the current locales that the client is using
**__view**: the view-name
**__device**: the client's device: either desktop, tablet or phone
**__title**: the title of the page
**__description**: the description of the page
**__charset**: the charset of the page
**__useragent**: useragent info, created with [3rd-Eden useragent](https://github.com/3rd-Eden/useragent)
**__sessiontime**: time that a state-session whould be retained
**__uri**: the uri
**__path**: the path (uri without questionmark)
**__ga**: Google analytics key
**__viewport**: the viewport
**__routes**: route-object containing all client-side route-information, extracted from routes.json
**__languages**: languages-object with available languages, extracted from reactserver.config.json
**__staticView**: whether the view has static content

# Data passed through to the view by the router

The router can pass through data by invoking `reactview` and passing a second argument. This argument should be an object: the property `props` is used to define extra view-properties. This is the prefered way to deal with request-parameters, whenever you just need the value and not need to lookup any other information.

```js
{
    method: 'GET',
    path: '/',
    handler(request, reply) {
        reply.reactview('index', {props: {name: request.query.name}});
    }
}
```

# Data defined inside a model-file

More properties can be created by using a **Model** that should have the same name as the `view`, only with the extention of `.js`. Models are more powerful, because they receive the client's language and can build complex datastructures asynchronously.

The webapplication comes with a folder named: **models**. This is the folder where you should define your (optional) models. Whenever a modelfile exists, the application will use it. A Model should always return either an object, or a Promise that gets fulfilled with an object (see [Async models](/async-models)). The object gets merges inside this.props.

Model-files should export a function that recieves 2 arguments: `options` and `language`. The first argument can be defined by the router's method `reactview` (with a second argument: *{modelConfig: {}}*). The second argument is passed through by Itsa-server and contains the client language. The context (`this`) inside the model-function will be the `request`-object, so you can retrieve data from the request.

## Example model-file

```js
'use strict';

const model = (options, language) => {
    // this === request

    return {
        name: 'Marco Asbreuk'
    };
};

module.exports = model;
```

# Different models for different devices

By changing the modelname with a affinity, you can setup different model-files to be served on the next devices: desktop, tablet and phone. See [Different devices](/different-devices).