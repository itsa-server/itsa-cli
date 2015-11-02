There are several Gulp-command that you can use from the console (at the root directory of your application). These perform some automatic tasks:

* **gulp test** <-- inspects the js files using eslint
* **gulp devserver** <-- deploys a development-server: you can inspect your application in a browser at http://localhost:5001
* **gulp devservertablet** <-- deploys a development-server simulating a tablet
* **gulp devserverphone** <-- deploys a development-server simulating a phone
* **gulp bumppatch** <-- release a productionversion bumping the patch-version
* **gulp bumpminor** <-- release a productionversion bumping the minor version
* **gulp bumpmajor** <-- release a productionversion bumping the major version