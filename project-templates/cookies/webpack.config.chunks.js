'use strict';

const path = require('path'),
    webpack = require('webpack'),
    itsaServerMainPagePlugin = require('itsa-react-server/lib/webpack/main-page-plugin'),
    findCssExternals = require('itsa-react-server/lib/find-css-externals')(),
    findJsExternals = require('itsa-react-server/lib/find-js-externals')(),
    urlLoaderLimit = require('itsa-react-server/lib/find-url-load-limit')(),
    packageVersion = require('itsa-react-server/lib/find-package-version').getVersion(),
    cdn = require('itsa-react-server/lib/find-cdn')(),
    ItsaServerMainPagePluginChunks = itsaServerMainPagePlugin.Chunks,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'), // KEEP THIS REQUIREMENT: see 'postcss.config' file
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
        filename: '../../../private/assets/js/[chunkhash].js',
        path: path.resolve(cwd, 'build.tmp/public/assets/'+packageVersion+'/'),
        sourceMapFilename: '[file].map',
        publicPath: (cdn || '/') + 'assets/'+packageVersion+'/'
    },
    devtool: 'source-map',
    externals: findJsExternals,
    module: {
        rules: [
            {
                test: /^/,
                use: {
                    loader: 'itsa-react-server/lib/css-strip-externals-loader',
                    options: {
                        externals: findCssExternals
                    }
                }
            },
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
                        'sass-loader',
                        'postcss-loader'
                    ]
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
            }
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
        new ItsaServerMainPagePluginChunks({template: './src/page-template.jsx', app: './src/app.js'}),
        new ExtractTextPlugin({
            filename: '../../../private/assets/css/[contenthash].css',
            allChunks: false
        }),
        // new webpack.DefinePlugin({
        // PRODUCTION: JSON.stringify(true),
        // VERSION: JSON.stringify("5fa3b9"),
        // BROWSER_SUPPORTS_HTML5: true,
        // TWO: "1+1",
        // 'typeof window': JSON.stringify('object')
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: '_itsa_server_commons',
            // (the commons chunk name)
            filename: '_itsa_server_commons/[chunkhash].js',
            // (the filename of the commons chunk)
            // minChunks: 3,
            // (Modules must be shared between 3 entries)
            // chunks: ["pageA", "pageB"],
            // (Only use these entries)
        })
    ]
};

module.exports = webPackConfig;
