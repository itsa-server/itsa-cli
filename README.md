# itsa-cli
Command line interface for itsa-server

## Installation

Step 1: install itsa-cli globally:

```
npm install -g itsa-cli
```

Step 2: install Gulp globally:

```
npm install -g gulp
```

Step 3: If you want linting in your project, you need to install es-lint globally:

```
npm install -g eslint
```

Step 4: Because we also need to lint React syntax, you need to install eslint-plugin-react globally:

```
npm install -g eslint-plugin-react
```

## Creating applications

Once you have all these packages, you can create a new web-application like this:

### Create a new application:

```js
itsa create appname
```

`appname` will become a new folder with all approriate files.

### Check the new application

Goto the created folder and run:

```js
gulp devserver
```

When gulp has finished, the application will be running at http://localhost:5001

See http://itsaserver.io for the complete documentation and usage.


--------------

You can start right away building your application. Any help can be found at [http://itsaserver.io](http://itsaserver.io).