Itsa-server heeft een controller aan de server-kant, en je kunt optioneel een controller voor de client gebruiken.

# Serverside controller

De controller voor de server wordt beheert door het framework. Je hoeft alleen de route-file te defineren en zodra reply.reactview wordt aangeroepen, wordt het betreffende view gerendered met de juiste model-gegevens.

# Clientside controller

Er zijn 2 manieren waarop de client de controller kan ontvangen: enkel de controller die je zelf zult moeten gaan beheren, of door ebruik te maken van onze clientside router, die de controller intern gebruikt. Het laatste is sterk aan te raden.

In beide gevallen, moet `app.js` worden aangemaakt, die gesitueerd is in de root-folder van de develop-applicatie.

## Gebruik maken van alleen de controller

Om de controller op de client te gebruiken, moet `app.js` er als volgt uit zien:

```js
const controller = require('itsa-client-controller');
```

De controller heeft toegang tot `this.props` welke ook op de server wordt gebruikt, alsmede extra informatie. Zie de documentatie vanItsa-controller voor meer info.

## Using itsa-react-router

Het heeft de voorkeur gebruik te maken van `itsa-react-router`. Deze module maakt gebruik van de controller, echter, het neemt de volledige routing controle over, gebasseerd op `routes.js` die op de server is gedefinieerd. Het werkt allemaal automatisch: de serverside route-data is beschikbaar op op de client (dat wil zeggen: het deel dat van toepassing is).

Met deze informatie zal `app.js` er als volgt uit moeten zien:

```js
var ItsaRouterClass = require('itsa-react-router');
new ItsaRouterClass();
```

itsa-react-router is een erg mooie manier om clientside routing op te zetten. Het enige dat nodig is, is bovenstaande code, dat is alles! Achter de schermen, worden  anchor-clicks geinspecteerd (delegated), default-prevented zodra er een match is met de server's `routes.js`-bestand en indien nodig een ajax-request gemaakt.