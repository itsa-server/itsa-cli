'use strict';

// make sure the process its current directory equals the executable directory
// so we can start it up from any other directory:
process.chdir(__dirname);

const Hapi = require('hapi'),
      Vision = require('vision'),
      Inert = require('inert'),
      reactServer = require('itsa-hapi-react-server'),
      packageJson = require('./package.json'),
      reactServerConfig = require('./versions/'+packageJson.version+'/reactserver.config.json'),
      ReactServerPlugin = {
          register: reactServer,
          options: reactServerConfig
      };

// setting up the server:
const server = new Hapi.Server();

// if you need additional view-eingines, specify them here:
/*
ReactServerPlugin.options.engines: {
    ejs: require('ejs')
};
*/

// ItsaServer will handle the connection and all further utilities:
server.register([Vision, Inert, ReactServerPlugin], err => {
    if (err) {
        console.log(err);
        throw err; // something bad happened loading the plugins
    }

    // starting the server:
    server.start((err) => {
        let notify;

        if (err) {
            console.log(err);
            return;
        }
        const args = process.argv,
              environment = args[2] || 'production',
              message = 'Server running '+environment+' at port: '+ server.info.port;

        if (environment!=='production') {
            notify = require('node-notify');
            notify({
                title: 'Starting development server',
                message,
                sound: true
            });
        }

        console.log(message);
    });
});