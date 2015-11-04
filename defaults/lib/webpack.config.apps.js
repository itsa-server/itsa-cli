'use strict';

const getversion = require('./custom_modules/getversion'),
      version = getversion(),
      webpack = require('webpack'),
      // cssStrip = require('./custom_modules/css-strip-loader'),
      reactServerConfig = require('../src/'+version.developmentString+'/reactserver.config.json'),
      urlLoaderLimit = reactServerConfig['url-loader-limit'],
      SRC_DIR = 'src/'+version.developmentString,
      publicPath = 'assets/'+version.nextProdVersion+'/',
      cwd = process.cwd();

const configFn = (production/*, justComponent*/) => {
    let context, filename, chunkFilename, plugins;
    plugins = [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true)
    ];
    const path = (production ? './public_server' : './development_server') +'/versions/'+version.nextProdVersion+'/assets/';
    if (production) {
        plugins = plugins.concat([
            new webpack.optimize.UglifyJsPlugin({
                beautify: {
                    ascii_only: true,
                    beautify: false
                },
                compress: {
                    drop_debugger: true,
                    drop_console: true,
                    warnings: false
                },
                output: {
                    comments: false
                }
            })
        ]);
    }
    filename = 'js/app.js';
    chunkFilename = 'js/components/[id].js';
    plugins.push(new webpack.optimize.CommonsChunkPlugin('/js/common/main.js'));
    context = cwd+'/'+SRC_DIR;

    return {
        context,
        entry: '', // <-- leave empty: gulp will use this directory as base
        output: {
            path,
            // publicPath: 'http://mycdn.com/', // This is used to generate URLs to e.g. images
            publicPath,
            filename,
            chunkFilename
        },
        plugins,
        module: {
            loaders: [
                { test: /\.jsx?$/, loader: 'babel-loader' },
                { test: /\.s?css$/, loader: cwd+'/lib/custom_modules/css-strip-loader' },
                { test: /\.(jpe?g|png|gif)$/, loader: 'url-loader'+(urlLoaderLimit ? '?limit='+urlLoaderLimit : '')}, // inline base64 URLs for <=8k images, direct URLs for the rest
                { test: /\.json?$/, loader: 'json-loader' },
                { test: /\.(otf|eot|svg|ttf|woff)/, loader: 'url-loader'+(urlLoaderLimit ? '?limit='+urlLoaderLimit : '')} // inline base64 URLs for <=8k images, direct URLs for the rest
            ]
        }
    };

};

module.exports = configFn;