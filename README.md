# itsa-cli
Command line interface for itsa-server

## Installation

Step 1: install itsa-cli globally:

```
npm install -g itsa-cli
```

## Creating applications

Once you have all these packages, you can create a new web-application like this:

### Create a new application:

```js
itsa create appname
```

`appname` will become a new folder with all appropriate files.

### Check the new application

Goto the created folder and run:

```js
npm run watch
```

As soon as the message **Server running development at port: 3001** appears, you can open a browser and visit **http://localhost:3001**. The `Hello World!` app should come up.

See http://itsaserver.io for the complete documentation and usage.


--------------

You can start right away building your application. Any help can be found at [http://itsaserver.io](http://itsaserver.io).