Elke view ontvangt **this.props** welke gebruikt kan worden om het component te renderen. De waarde van this.props wordt aangemaakt gecombineerd via drie verschillende gegevens-types:

* voorgedefinieerd (dubbel onderstreepte) properties, aangemaakt door de server
* gegevens doorgegeven door de route
* gegevens gedefinieerd binnenin een model-bestand

# Voorgedefinieerde data

Itsa-server zal altijd een **this.props**-object aan de view doorgeven. Sommige private properties zijn reeds gedefinieerd en altijd beschikbaar: deze properties hebben een uiterlijk van: **__propertyname**:

### Beschikbare voorgedefinieerde properties van this.props:

**__lang**: de huidige taal (afkorting) die de client gebruikt
**__langprefix**: language prefix welke kan worden gebruikt om language uri's te genereren
**__locales**: de huidige locales die de client gebruikt
**__view**: de view-naam
**__device**: de client's device: desktop, tablet of phone
**__title**: de titel van de pagina
**__description**: de description van de pagina
**__charset**: de charset van de pagina
**__useragent**: useragent info, aangemaakt via [3rd-Eden useragent](https://github.com/3rd-Eden/useragent)
**__sessiontime**: tijd dat een state-session moet worden bewaard
**__uri**: de uri
**__path**: de path (uri zonder vraagteken)
**__ga**: Google analytics sleutel
**__viewport**: de viewport
**__routes**: route-object houder van alle client-side route-informatie, verkregen uit routes.json
**__languages**: languages-object met beschikbare languages, verkregen uit reactserver.config.json
**__staticView**: of de view statische content heeft

# Gegevens die aan de view wordt doorgegeven via de router

De router kan gegevens doorgeven door `reactview` aan te roepen en een tweede argument mee te geven. Dit argument moet een object zijn: de property `props` wordt daarbij gebruikt om extra view-properties mee te geven. Dit is de geadviseerd methode om request-parameters door te spelen, wanneer je alleen deze waarde nodig hebt en niet andere informatie hoeft op te vragen.

```js
{
    method: 'GET',
    path: '/',
    handler(request, reply) {
        reply.reactview('index', {props: {name: request.query.name}});
    }
}
```

# Gegevens gedefinieers in een model-bestand

Meer gegevens kunnen worden aangemaakt door gebruik te maken van een **Model** die dezelfde naam moet hebben als de `view`, allen met de extentie `.js`. Modellen zijn erg krachtig, omdat ze de client's language ontvangen en complexe datastructuren asynchroon kunnen opbouwen.

De webapplicatie heeft een map met de naam: **models**. DDit is de map waar de (optionele) modellen moeten worden aangemaakt. Zodra een model-bestand bestaat, zal de applicati deze gebruiken. Een Model moet altijd een object retourneren, of een Promise welke wordt fulfilled met een object (see [Async models](/async-models)). Het object wordt samengevoegd met met this.props.

Model-bestanden behoren een functie te exporteren welke zelf weer 2 argumenten ontvangt: `options` en `language`. Het eerste argument kan door de router's methode `reactview` worden doorgespeelt, via een tweede argument: *{modelConfig: {}}*). Het tweede argument wordt automatisch door Itsa-server doorgegeven en bezit de client's language. De context (`this`) van de model-function is het `request`-object, waarmee gegevens van de request kan worden opgevraagd.

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

# Verschillende modellen voor verschillende devices

Door de modelnaam te voorzien van een affinity, kunnen verschillende model-bestanden worden opgebouwd voor de volgende devices: desktop, tablet and phone. Zie [Different devices](/different-devices).