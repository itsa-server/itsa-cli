/* eslint no-console: 0 */
'use strict';

// make sure the process its current directory equals the executable directory
// so we can start it up from any other directory:
process.chdir(__dirname);

const Hapi = require('hapi'),
    reactServer = require('itsa-react-server'),
    manifest = require('./src/manifest.json'),
    gracefullShutdown = require('itsa-react-server/lib/gracefull-shutdown'),
    environment = process.env.NODE_ENV || 'local',
    productionEnvironment = (environment==='production'),
    localEnvironment = (environment==='local'),
    ReactServerPlugin = {
        register: reactServer,
        options: manifest
    };

// setting up the server:
const server = new Hapi.Server({
    connections: {
        router: {
            stripTrailingSlash: true
        }
    }
});

// if you need additional view-engines, specify them here:
/*
ReactServerPlugin.options.engines: {
    ejs: require('ejs')
};
*/


// ItsaServer will handle the connection and all further utilities:
server.register([ReactServerPlugin], err => {
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
        const device = server.manifest.device,
            message = 'Server running '+ environment + (device ? ' simulation requests from '+device : '')+' at port: '+ server.info.port,
        gracefullyShutDownTime = manifest.gracefullyShutDown || 10;

        // gracefullly shutdown: https://hapijs.com/api#serverstopoptions-callback
        process.on('SIGINT', gracefullShutdown.shutdown.bind(null, server, gracefullyShutDownTime, localEnvironment));
        process.on('SIGQUIT', gracefullShutdown.shutdown.bind(null, server, gracefullyShutDownTime, localEnvironment));
        process.on('SIGTERM', gracefullShutdown.shutdown.bind(null, server, gracefullyShutDownTime, localEnvironment));

        if (localEnvironment) {
            notify = require('node-notify');
            notify({
                title: 'Starting development server',
                message,
                sound: true
            });
        }

        if (!productionEnvironment) {
            console.log(message);
        }

    });
});
