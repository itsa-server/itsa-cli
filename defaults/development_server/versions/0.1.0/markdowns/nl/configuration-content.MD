# reactserver.config.json

**reactserver.config.json** is het applicatie configuratie-bestand. Het heeft de volgende structuur:

```json
{
    "port": 4001,
    "url-loader-limit": "16384",
    "debug": false,
    "inlinecss": true,
    "page-description": "my awesome page",
    "google-analytics": "UA-12345",
    "sessiontime": 10,
    "meta-viewport": {
        "desktop": "width=device-width, initial-scale=1.0",
        "phone": "user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui",
        "tablet": "user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui"
    },
    "languages": {
        "en": "default",
        "nl": true,
        "de": false,
        "fr": false
    },
    "databases": {
        "db1": {
            "database": "db1",
            "user": "my_username",
            "password": "my_password"
        }
    },
    "environments": {
        "development": {
            "devserver": true,
            "port": 5001,
            "url-loader-limit": "0",
            "debug": false,
            "inlinecss": false
        },
        "phone": {
            "devserver": true,
            "port": 5001,
            "url-loader-limit": "0",
            "debug": false,
            "inlinecss": true,
            "device": "phone"
        },
        "tablet": {
            "devserver": true,
            "port": 5001,
            "url-loader-limit": "0",
            "debug": false,
            "inlinecss": true,
            "device": "tablet"
        }
    }
}
```

# Uitleg properties

* **port** --> de poort waarop de webapp zal starten
* **url-loader-limit** --> limiet waarbij required url-images worden aangemaakt als inline-images (om het aantal requests te beperken). Zie [webpack/url-loader](https://github.com/webpack/url-loader). Indien **0**, dan worden alle images inline aangemaakt.
* **debug** --> ofdebugging aan or uit is (console berichten)
* **inlinecss** --> of de css inline wordt aangemaakt (aanbevolen), of d.m.v. een extern bestand
* **page-description** --> de beschrijving in de html-head
* **google-analytics** --> indien gedefinieerd, dan wordt dit id gebruikt voor het updaten van google-analytics
* **sessiontime** --> tijd (in **seconden**) waarbij de applicatie zijn **state** wordt bewaard in de localstorage. Op deze manier kan de state worden herbruikt wanner de bezoeker de applicatie verlaat
* **meta-viewport** --> html-meta tags, moet afzonderlijk worden ingesteld voor **desktop, tablet and phone**.
* **languages** --> the talen die de applicatie gebruikt. Alleen talen die zijn ingesteld op **true** worden geactiveerd en **er moet altijd één <u>default</u> language zijn gespecificeerd
* **databases** --> wordt gebruikt om toegang tot de database te specificeren. Dit is enkel informatie zonder directe functionaliteit door itsa-server. Echter, wanneer database-modules worden geintegreerd, dan moeten deze deze data gebruiken als entry.
* **environments** --> voor de specificatie van verschillende omgevingen.
