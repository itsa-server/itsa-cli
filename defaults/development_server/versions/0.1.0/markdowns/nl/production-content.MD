Het ontwikkelen van een webapplicatie houdt in dat je werkt aan een specifieke rc-versie. Zodra deze versie gereed if voor produktie, kan een produktie-versie worden opgebouwd, welke moet worden geupload naar de server

# Aanmaken van een nieuwe produktie-versie

Het aanmaken van een produktie-versie kan worden gedaan door gebruik te maken van het juiste Gulp-commando. Er zijn drie verschillende methoden voor het aanmaken van een produktie-versie:

* Bumpen van de path-versie (f.e. 1.0.2 --> 1.0.3)
* Bumpen van de minor-versie (f.e. 1.0.2 --> 1.1.0)
* Bumpen van de major-versie (f.e. 1.0.2 --> 2.0.0)

Bij het opbouwen van een versie, wordt gebruik gemaakt van [webpack](https://webpack.github.io). Webpack's configuratie-bestand kan worden aangepast, maar het is sterk aan te raden uitsluitend plugins en loaders te installeren. De webpack configuratie-bestanden zijn sterk specifiek voor dit platform: aanpassingen kunnen snel leiden tot het falen van het platform. De webpack config-bestanden worden bewaard in de map: `app-root/lib`.

## Bumpen van versies

### Bumpen patch-versie
* Open de console in de root van de app-folder
* Type: `gulp bumppatch`
* upload de nieuwe versie version naar de server, alsmede package.json (die nu het laatste version-number bezit)
* herstart de server

### Bumpen minor-version
* Open de console in de root van de app-folder
* Type: `gulp bumpminor`
* upload de nieuwe versie version naar de server, alsmede package.json (die nu het laatste version-number bezit)
* herstart de server

### Bumpen major-version
* Open de console in de root van de app-folder
* Type: `gulp bumpmajor`
* upload de nieuwe versie version naar de server, alsmede package.json (die nu het laatste version-number bezit)
* herstart de server

## Reversie naar vorige version (aan de serverkant)
Indien de productie-versie een kritische bug blijkt te hebben, kan er eenvoudig worden teruggevallen op een vorige versie. Onthoud: de vorige versies zijn volledig aanwezig middels een eigen versie-nummer.

* Ga naar de root-application-map op de server
* Wijzig het bestand `package.json` --> zet het versie-nummer op de versie die je wilt gebruiken
* herstart the server

Zodra Itsa-server start, zal het de versie starten die gespecificeerd is in `package.json`.