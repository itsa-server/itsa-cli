'use strict';

const getVersion = require('itsa-react-server-webpack-builder').getVersion,
      version = getVersion(),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      webpack = require('webpack'),
      reactServerConfig = require('../src/'+version.developmentString+'/reactserver.config.json'),
      urlLoaderLimit = reactServerConfig['url-loader-limit'],
      SRC_DIR = '/src/'+version.developmentString,
      cssFilename = 'css/[name].css',
      // publicPath: 'http://mycdn.com/', // This is used to generate URLs to e.g. images
      publicPath = 'assets/'+version.nextProdVersion+'/',
      filename = '../views/[name].js',
      cwd = process.cwd();

const configFn = production => {
    let plugins = [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new ExtractTextPlugin(cssFilename, {allChunks: false})
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

    return {
        context: cwd+SRC_DIR,
        entry: '', // <-- leave empty: gulp will use this directory as base
        output: {
            path,
            publicPath,
            filename,
            cssFilename
        },
        plugins,
        module: {
            loaders: [
                { test: /\.jsx?$/, loader: 'babel-loader' },
                { test: /\.s?css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader!postcss-loader',{allChunks: false}) }, // use ! to chain loaders
                { test: /\.(jpe?g|png|gif)$/, loader: 'url-loader'+(urlLoaderLimit ? '?limit='+urlLoaderLimit : '')}, // inline base64 URLs for <=8k images, direct URLs for the rest
                { test: /\.json?$/, loader: 'json-loader' },
                { test: /\.(otf|eot|svg|ttf|woff)/, loader: 'url-loader'+(urlLoaderLimit ? '?limit='+urlLoaderLimit : '')} // inline base64 URLs for <=8k images, direct URLs for the rest
            ]
        }
    };
};

module.exports = configFn;