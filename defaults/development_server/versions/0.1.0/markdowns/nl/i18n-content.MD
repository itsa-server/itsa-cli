Internationalisatie was nog nooit zo eenvoudig. Dat wil zeggen, wanneer tevens gebruikt wordt gemaakt van `itsa-react-router`, welke zorg draagt voor de juiste routing op de client. Internationalisatie kan in een paar stappen worden opgezet:

# Genereer vertaalde web-pagina's

## Stap 1: Definieer de talen die de applicatie gaat gebruiken

In `reactserver.config.json` moet het veld `languages` worden gedefinieerd. Zorg er voor dat er altijd é´n language op `default` staat:

### reactserver.config.json
```json
{
    "port": 4001,
    "languages": {
        "en": "default",
        "nl": true,
        "de": false,
        "fr": false
    }
}
```

In dit voorbeeld zijn slechts twee talen geactiveerd: **en** en **nl**. Engels is de `default`-taal. Zodra een bezoeker de webapplicatie bezoekt, wordt de taal geselecteerd volgens de volgende regels:

* Indien opgelegd door de client's uri: gebruik deze taal (wordt opgelegd door een url die begint met **/lang**/xxxx)
* Indien niet door de client's uri opgelegd: probeer de client's voorkeur-taal
* Indien de client's voorkeur-taal niet is geactiveerd, gebruik dan de web-app's `default`-taal

## Stap 2: Maak views met modellen die de actief gebruikte taal ontvangen.


### Voorbeeld model-file

```js
'use strict';

const fs-extr = require('fs');

const model = (options, language) => {
    // this === request

    return fsp.readJson('../languages/'+language+'.json').then(
        // model moet een object retourneren: this.props.msg kan worden gebruikt in de view
        langfile => return {msg: langfile['Hello world']};
    );

};

module.exports = model;
```
Dit voorbeeld laadt een json-bestand, maar deze kan ook worden verkregen via `require`, [markdown](/markdown), of een [database](databases).

## Stap 3 gebruik de model-gegevens in de view

### Eenvoudige view-file
```js
const React = require('react'),

const Body = React.createClass({
    render() {
        return (
            <div>{this.props.msg}</div>
        );
    }
});

module.exports = Body;
```

# Vertaalde browser pagina-titels
De titel dat in de browser verschijnt, kan ook worden ge-internationaliseerd. Om dit voor elkaar te krijgen, moeten de bestanden in de map **pagetitles** worden onderhouden. Iedere taal moet een eigen json-bestand krijgen, waarna iedere view wordt gerendered met de juiste titel. Dit taal-bestand is tevens affinity-gevoelig: er zijn verschillende titels per device te genereren.

### Voorbeeld /pagetitles/nl.json
```json
{
    "index": "Onze prachtige website",
    "help": "Help wanneer je het nodig hebt",
    "help@phone": "Help"
}
```

Pagina-titels krijgen de juiste taal automatisch via de server. Wanneer de taal wordt gewisseld op de client, dan gebeurt dit tevens wanneer `itsa-react-router` draait op de client.

# Waar worden language-bestanden bewaard

Er zijn verschillende plaatsen voor de language-bestanden: ieder met zijn eigen doel:
* **/pagetitles/en.json** (etc) <-- pagina-titels
* **/languages/en.json** (etc) <-- alleen woorden of kleine zinnen
* **/markdowns/en/filename.MD** (etc) <-- complete pagina-inhouden
* zelf opgezette database <-- moet zelf worden ingesteld

Al deze vertalingen (met uitzondering van de eerste), moeten worden ingelezen en afgehandled door de modellen.

# Menu voor het wisselen van talen

Itsa-server komt met een speciaal bestand die een React jsx-component retourneert en dat een ul-menulist is. Je hoeft deze alleen maar toe te voegen, en je krijgt een gerenderde vertaal-wissel menu. Houdt er wel rekenening mee om this.props door te geven:

```js
const LangMenuList = require('./__language_menulist');

const React = require('react');

const Body = React.createClass({
    render() {
        return (
            <div>
                <LangMenuList {...this.props}/>
                <h1>Welcome to my page</h1>
            </div>
        );
    }
});

module.exports = Body;

```

# Hoe het werkt op de client

Wanneer er gebruik wordt gemaakt van `itsa-react-router`, dan werkt alles automatisch. Deze module is op de hoogte van de aktieve languages, de titels etc. Zodra er van taal wordt gewisseld, zorgt de client-router voor de juiste vertaalde data en zal de Body-component efficient worden ge-rerendered.