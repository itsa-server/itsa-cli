# jsx-views als website-pagina's
De webapplicatie heeft een map genaamd: **views**. Dit is de map waar de jsx-pages moeten worden aangemaakt. De viewnamen mogen enkel bestaan uit de tekens: [a-z][A-Z][0-9], optioneel met een @ voor de affinity.

De **Router** is verantwoordelijk voor het aanroepen van de juiste view. Elke view ontvangt **this.props** welke kan worden gebruikt bij het renderen van het Component.

## Een Route definiëren (routes.js)
De **router** kan, binnenin een route, iedere view aanroepen via zijn bestandsnaam:

```js
{
    method: 'GET',
    path: '/',
    handler(request, reply) {
        reply.reactview('index');
    }
},
```
De speciale property **reactview** zorgt voor serverside rendering van de view met de naam: **index.jsx**.

De methode **reply.reactview** accepteert een tweede optionele argument, dat een object moet zijn:
```js
{
    modelConfig, // <-- [object] wordt doorgegeven aan de Model
    props, // <-- [object] wordt samengevoegd met this.props (aanvullend op de voorgedefinieerde porperties en model-properties)
    viewport, // <-- de viewport (meta-tag van de html-pagina)
    charset, // <-- de charset van de html-pagina
    description, // <-- de description (meta-tag) van de html-pagina
    staticView // <-- of de view een `static view` is, welke niet verandert
}
```


Bij sommige routes, weet je zeker dat de view nooit verandert. In het bijzonder wanner je geen gebruik maakt van this.props bij het renderen van de view. In die gevallen, kun je beter het tweede argument voorzien van: **staticView: true**. Dit voorkomt dat de client extra requests maakt wanneer er weer terug wordt genavigeerd naar een vorige pagina.


## Doorgeven van properties aan de view
Itsa-server zal altijd een **this.props**-object aan de view doorgeven. Sommige private properties zijn al voorgedefinieerd en altijd beschikbaar: deze properties hebben een kenmerk van: **__propertyname**. Aanvullende properties kunnen worden aangemaakt door gebruik te maken van een Model, die dezelfde naam heeft als de view, alleen dan met de extentie `.js`. See [Models](/models) voor meer info over properties.

## Genereren van een view-file
Iedere view moet een React-Component exporteren die zal worden ge-rendered op het **body** element. Onderstaand zijn enkele voorbeelden van hoe een view-bestand er uit kan zien:

### Eenvoudig view-bestand
```js
const React = require('react'),

const Body = React.createClass({
    render() {
        return (
            <div className={activeClass}>
                <div>Hello World!</div>
            </div>
        );
    }
});

module.exports = Body;
```

### Geavanceerd view-bestand

A more advance file may look like:

```js
require('../assets/css/main.scss');

const React = require('react'),
      Menu = require('../modules/menu.jsx'),
      Reflux = require('reflux'),
      store = require('../reflux/stores/app-store'),
      logo = require('../assets/images/logo.png');

const Body = React.createClass({
    mixins: [Reflux.connect(store)],
    render() {
        return (
            <div className={activeClass}>
                <img className="logo" src={logo} />
                <Menu {...this.props}/>
                <div dangerouslySetInnerHTML={this.props.pagecontent} />
            </div>
        );
    }
});

module.exports = Body;
```

## Automatische rendering op de server en client

Een view is een **jsx-bestand**, die automatisch wordt ge-rendered op de server-kant. Daarnaast zal de server het body-component meesturen naar de client, waar het weerom kan worden ge-rendered. Hiermee zijn de volledige features (javascript) van de component beschikbaar op de client. Om dit voor elkaar te krijgen, moet `itsa-react-router` worden geinitialiseerd in het bestand `app.js`.

## Verschillende views voor verschillende devices

Door het bestandsnaam te voorzien van een affinity, kunnen verschillende view-bestanden worden gecreëerd voor de volgende devices: desktop, tablet en mobiele telefoons. Zie [Different devices](/different-devices).