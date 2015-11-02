Developing a webapplication means that you are working on a specific rc-release. When this release is ready for production, you can generate a production release, which you can upload to your server

# Create a new production-release

Creating a new productionrelease should be done by using the proper Gulp-command. There are three different ways of upgrading your application's production-version:

* Bumping the path-version (f.e. 1.0.2 --> 1.0.3)
* Bumping the minor-version (f.e. 1.0.2 --> 1.1.0)
* Bumping the major-version (f.e. 1.0.2 --> 2.0.0)

When creating a release, [webpack](https://webpack.github.io) is being used to build the files. You can adjust the webpack configuration-files, but we advice to only manipulate the plugins and loaders. The webpack configuration-files are highly specific for this framework: modifying them could easily mean breaking the system. The webpack config-files are retained inside the folder: `app-root/lib`.

## Bumping versions

### Bumping patch-version
* Open the console at the root of your app-folder (`src` its parent folder)
* Type: `gulp bumppatch`
* upload the new version to your server, as well as package.json (which holds the latest version-number)
* restart the server

### Bumping minor-version
* Open the console at the root of your app-folder (`src` its parent folder)
* Type: `gulp bumpminor`
* upload the new version to your server, as well as package.json (which holds the latest version-number)
* restart the server

### Bumping major-version
* Open the console at the root of your app-folder (`src` its parent folder)
* Type: `gulp bumpmajor`
* upload the new version to your server, as well as package.json (which holds the latest version-number)
* restart the server

## Revert to previous version (serverside)
Whenever your production-version happens to have a critical bug, you can easily revert to a previous version. Remember: the previous version is completely available inside its own version-number.

* Go to the root-applicationfolder on your server
* Change the file `package.json` --> set the version-number to the version you want to use
* restart the server

Whenever Itsa-server starts, it will run the version specified inside `package.json`.