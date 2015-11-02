Er zijn verschillende Gulp-commando's die je vanaf de console kunt gebruiken (in de root-map van de applicatie). Deze zorgen voor automatische taken:

* **gulp test** <-- inspecteert de js-bestanden m.b.v. eslint
* **gulp devserver** <-- deploys een development-server: de applicatie kan in een browser worden bekeken via http://localhost:5001
* **gulp devservertablet** <-- deploys een development-server waarbij een tablet wordt gesimulleerd
* **gulp devserverphone** <-- deploys a development-server waarbij een mobiele telefoon wordt gesimulleerd
* **gulp bumppatch** <-- release a productionversion bumping de patch-version
* **gulp bumpminor** <-- release a productionversion bumping de minor version
* **gulp bumpmajor** <-- release a productionversion bumping de major version