Het bestand `app.js` is bedoelt als applicati--bestand. Het is actief op iedere pagina (alleen 1 versie). Het is aan de ontwikkelaar wat dit de functies van dit bestand zijn, maar minimaal moet een [clientside router](/router) worden opgezet.

# Master app-bestand
Wij adviseren minimaal de volgende code te gebruiken in de clientside app:

```js
var ItsaRouterClass = require('itsa-react-router');
new ItsaRouterClass();
```

# Sub app-bestanden
Er kunnen ool sub app-bestanden worden aangemaakt: deze draaien enkel op de betreffende pagina. Onthoud dat Reflux de verantwoordelijkheid heeft voor het aansturen van UI-acties en voor het onderhouden van de `state` van de applicatie. Sub-apps kunnen worden gedefinieerd wanneer enige code nodig is dat niet UI gerelateerd is.

De sub-apps moeten in een speciale map worden bewaard: **pageapps**, waarbij het een goed gebruik is om de subapps dezelfde naam te geven als de view waarin die actief is (alleen dan met `.js` as extentie). In de view, <u>MOET</u> deze sub-app geinitialiseerd worden zodra de view's component wordt gemount. en MOET worden destroyed wanneer ge-unmount.

De sub-apps behoren een constructor en een methode voor destruction te hebben. Wij adviseren gebruik te maken van ITSA-classes: deze hebben een ingebouwde destructor.

### Voorbeeld van een view met een subapp:
```js
const React = require('react'),
      SubApp = require('../pageapps/index.js');

const Body = React.createClass({
    componentDidMount() {
        this.subapp = new SubApp();
    },
    componentWillUnmount() {
        this.subapp.destroy(); // <-- destroy is uitsluitend aanwezig bij ITSA-Classes, niet ES6-Classes
    },
    render() {
        return (
            <h1>Hello World</h1>
        );
    }
});

module.exports = Body;
```