'use strict';

const path = require('path'),
    webpack = require('webpack'),
    itsaServerMainPagePlugin = require('itsa-react-server/lib/webpack/main-page-plugin'),
    ItsaServerMainPagePluginViews = itsaServerMainPagePlugin.Views,
    urlLoaderLimit = require('itsa-react-server/lib/find-url-load-limit')(),
    cdn = require('itsa-react-server/lib/find-cdn')(),
    packageVersion = require('itsa-react-server/lib/find-package-version').getVersion(),
    cwd = process.cwd(),
    glob = require('glob');

let webPackConfig = {
    entry: glob.sync('./src/views/**/*.jsx').reduce((definition, file) => {
        definition[file.substring(12, file.length-4)] = file;
        return definition;
    }, {}),
    resolve: {
        modules: ['src', 'node_modules']
    },
    output: {
        filename: '../../../view_components/[name].js',
        path: path.resolve(cwd, 'build.tmp/public/assets/'+packageVersion+'/'),
        sourceMapFilename: '[file].map',
        publicPath: (cdn || '/') + 'assets/'+packageVersion+'/'
    },
    devtool: 'source-map',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: {
                    loader: 'itsa-react-server/lib/css-strip-loader'
                }
            },
            {
                test: /\.jsx?$/i,
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: false
                    }
                }
            },
            // uncomment next test is you "require" image files:
            /*
            {
                test: /\.(jpe?g|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: urlLoaderLimit // inline base64 URLs for <=urlLoaderLimit bytes images, direct URLs for the rest
                    }
                }
            },
            */
            // uncomment next test is you "require" svg files:
            /*
            {
                test: /\.svg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: urlLoaderLimit // inline base64 URLs for <=urlLoaderLimit bytes images, direct URLs for the rest
                    }
                }
            }
            */
            // uncomment next test is you "require" json files:
            /*
            {
                test: /\.json?$/,
                use: {
                    loader: 'json-loader'
                }
            },
            */
            // uncomment next test is you "require" svg files that need variabel fill-colors by using `svg-fill-loader`
            /*
            {
                test: /\.svg/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: urlLoaderLimit // inline base64 URLs for <=urlLoaderLimit bytes images, direct URLs for the rest
                        }
                    },
                    'svg-fill-loader'
                ]
            },
            */
            // uncomment next test is you "require" font files
            /*
            {
                test: /\.(otf|eot|ttf|woff)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: urlLoaderLimit // inline base64 URLs for <=urlLoaderLimit bytes images, direct URLs for the rest
                    }
                }
            }
            */
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new ItsaServerMainPagePluginViews({template: './src/page-template.jsx'})
    ]
};

module.exports = webPackConfig;
