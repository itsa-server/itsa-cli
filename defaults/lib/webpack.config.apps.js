'use strict';

const fs = require('fs'),
      webpack = require('webpack'),
      SRC_DIR = 'src',
      cwd = process.cwd();


const configFn = (production/*, justComponent*/) => {
    let context, filename, chunkFilename, plugins,
        reactServerConfig, urlLoaderLimit, reactServerConfigFile, packageFile,
        packageConfig, publicPath;

    packageFile = fs.readFileSync(cwd+'/package.json', 'utf8');
    try {
        packageConfig = JSON.parse(packageFile);
    }
    catch (err) {
        packageConfig = {};
    }
    publicPath = 'assets/'+packageConfig.version+'/';

    reactServerConfigFile = fs.readFileSync(cwd+'/'+SRC_DIR+'/reactserver.config.json', 'utf8');
    try {
        reactServerConfig = JSON.parse(reactServerConfigFile);
    }
    catch (err) {
        reactServerConfig = {};
    }

    urlLoaderLimit = reactServerConfig['url-loader-limit'],

    plugins = [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true)
    ];
    const path = (production ? './public' : './development_server/public') +'/assets/'+packageConfig.version+'/';
    if (production) {
        // TODO: rewrite a better version of `UglifyJsPlugin`, because we NEED beautify to prevent errors,
        // but the beautify-config is not passed through to uglifyjs, leading into trailing spaced
        // which urgently need to be removed
        plugins = plugins.concat([
            new webpack.optimize.UglifyJsPlugin({
                beautify: {
                    // ascii_only: true,
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
        // target: 'node',
        plugins,
        module: {
            loaders: [
                { test: /\.jsx?$/, loader: 'babel-loader', query: {compact: false} },
                { test: /\.s?css$/, loader: 'itsa-react-server-webpack-builder/lib/css-strip-loader' },
                { test: /\.(jpe?g|png|gif)$/, loader: 'url-loader'+(urlLoaderLimit ? '?limit='+urlLoaderLimit : '')}, // inline base64 URLs for <=8k images, direct URLs for the rest
                { test: /\.json?$/, loader: 'json-loader' },
                { test: /\.(otf|eot|svg|ttf|woff)/, loader: 'url-loader'+(urlLoaderLimit ? '?limit='+urlLoaderLimit : '')} // inline base64 URLs for <=8k images, direct URLs for the rest
            ]
        }
    };

};

module.exports = configFn;