De router moet worden gedefinieerd d.m.v. het bestand `routes.js`. Dit is de plek waar de routes worden gedefinieerd. Dit bestand wordt tevens gebruikt om de juiste clientside route informatie te genereren, welke kan worden gebruikt in een client-side-router (zoals itsa-react-router).

# Structuur routes.js

Routes.js moet een commonjs bestand zijn dat een array van route-objecten exporteert:

### Voorbeeld routes.js file
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

De structuur is gebasseerd op Hapi: zie de [Hapi.js docs](http://hapijs.com) voor aanvullende informatie.

Itsa-server zorgt er voor dat het reply-object drie aanvullende methods bezit:

* **reactview()** <-- response de gespecificeerde view
* **file()** <-- response een bestand (door [Inert](https://github.com/hapijs/inert))
* **action()** <-- voert een specifieke aktie uit, gebruikt voor ajax-request (W.I.U.)