Het ontwerpen van een webapplicatie betekent dat je werkt aan een specifieke rc-versie. Deze versie kan lokaal worden opgebouwd en gedraaid. Een rc-versie heeft altijd een hoger nummer dan een produktie-versie. Zodra een rc-release klaar is voor produktie, kan een produktie-release worden opgebouwd, waarmee direct een nieuw rc-release wordt aangemaakt (gereed voor verdere ontwikkeling).

# Ontwikkel altijd in de hoogste rc-versie
Alle andere versies behoren bevroren te zijn.

# Bouwen en draaien van een rc-versie

Zodra een versie wordt gedraaid, zal webpack een complete runtime bouwen.

* Open de console in de root van de applicatie map
* Type: `gulp devserver`
* Open een browser en navigeer naar: `http://localhost:5001`

# Bouwen en draaien van een tablet-versie

Je kunt eenvoudig bekijken hoe de webapp zal functioneren op een tablet, geopend vanuit een desktop-browser.

* Open de console in de root van de applicatie map
* Type: `gulp devservertablet`
* Open een browser en navigeer naar: `http://localhost:5001`

NB. Deze aktie zal enkel de juiste affinity-bestande gaan gebruiken (device specifieke views en models). Het gedrag van een tablet wordt niet gesimuleerd, evenmin als de css-regels. Maak gebruik van Chrome canary om dit te doen.

# Bouwen en draaien van een tablet-versie

* Open de console in de root van de applicatie map
* Type: `gulp devserverphone`
* Open een browser en navigeer naar: `http://localhost:5001`

NB. Deze aktie zal enkel de juiste affinity-bestande gaan gebruiken (device specifieke views en models). Het gedrag van een phone wordt niet gesimuleerd, evenmin als de css-regels. Maak gebruik van Chrome canary om dit te doen.
