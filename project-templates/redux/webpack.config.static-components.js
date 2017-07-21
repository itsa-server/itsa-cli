'use strict';

const path = require('path'),
    webpack = require('webpack'),
    staticComponentsEntry = require('itsa-react-server/lib/find-static-components-entry')(),
    itsaServerMainPagePlugin = require('itsa-react-server/lib/webpack/main-page-plugin'),
    ItsaServerMainPagePluginStaticComponents = itsaServerMainPagePlugin.StaticComponents,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'), // KEEP THIS REQUIREMENT: see 'postcss.config' file
    cwd = process.cwd(),
    cssFilename = 'css/[name].css';

let webPackConfig = {
    entry: staticComponentsEntry,
    resolve: {
        modules: ['src', 'node_modules']
    },
    output: {
        filename: 'components/[name].js',
        path: path.resolve(cwd, 'build.tmp/private/static-components/')
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:  [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 3,
                                minimize: true
                            }
                        },
                        'svg-fill-loader/encodeSharp',
                        'sass-loader',
                        'postcss-loader'
                    ],
                    allChunks: false
                })
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
                    'url-loader',
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
        new ExtractTextPlugin({
            filename: cssFilename,
            allChunks: false
        }),
        new ItsaServerMainPagePluginStaticComponents()
    ]
};

module.exports = webPackConfig;
