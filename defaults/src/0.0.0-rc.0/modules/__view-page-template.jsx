'use strict';

var React = require('react'),
    TransferedProperties = require('itsa-react-server-webpack-builder/core-components/transfered-properties'),
    NON_CLIENT_PROPS = {
        '__itsacommonscript': true,
        '__itsapagescript': true,
        '__itsapagelinkcss': true,
        '__itsapageinlinecss': true
    };

var Page = React.createClass({
    render: function() {
        var that = this,
            commonscript = this.props.__itsacommonscript && <script src={this.props.__itsacommonscript} />,
            pagescript = this.props.__itsapagescript && <script src={this.props.__itsapagescript} />,
            googleAnalyticsInit, gaInit, ga, pagecss, gaInitScript, googleAnalyticsGa, keys, clientProps;

        if (this.props.__ga) {
            gaInitScript = '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){'+
                '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),'+
                'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)'+
                '})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');';
            gaInit = {__html: gaInitScript};
            googleAnalyticsInit = <script dangerouslySetInnerHTML={gaInit} />;
            ga = {__html: 'ga(\'create\',\''+this.props.__ga+'\',\'auto\');ga(\'send\',\'pageview\');'};
            googleAnalyticsGa = <script dangerouslySetInnerHTML={ga} />;
        }

        if (this.props.__itsapagelinkcss) {
            pagecss = <link data-src="inline" rel="stylesheet" href={this.props.__itsapagelinkcss} />;
        }
        else if (this.props.__itsapageinlinecss) {
            pagecss = <style data-src="inline" type="text/css" dangerouslySetInnerHTML={this.props.__itsapageinlinecss} />;
        }

        // clone the props-oject, but leave some parts out:
        // don't send the heavy script and css, they are not needed as props on the client:
        clientProps = {};
        keys = Object.keys(this.props);
        keys.forEach(function(key) {
            if (!NON_CLIENT_PROPS[key]) {
                clientProps[key] = that.props[key];
            }
        });

        return (
            <html lang={this.props.__lang} data-page={this.props.__view} data-device={this.props.__device}>
            <head>
                <meta charSet={this.props.__charset} />
                <meta name="viewport" content={this.props.__viewport} />
                <meta name="description" content={this.props.__description} />
                {pagecss}
                <title>{this.props.__title}</title>
                {googleAnalyticsInit}
            </head>
            <body>
                <div id="view-container">
                    {this.props.children}
                </div>
                <TransferedProperties clientProps={clientProps} />
                {commonscript}
                {pagescript}
                {googleAnalyticsGa}
            </body>
            </html>
        );
    }
});

module.exports = Page;