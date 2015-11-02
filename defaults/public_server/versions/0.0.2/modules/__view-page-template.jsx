'use strict';

const React = require('react'),
      TransferedProperties = require('../../lib/transfered-properties');

const Page = React.createClass({
    render() {
        let commonscript = this.props.__itsacommonscript && <script src={this.props.__itsacommonscript} />,
            pagescript = this.props.__itsapagescript && <script src={this.props.__itsapagescript} />,
            googleAnalyticsInit, gaInit, ga, pagecss, stringifiedProps, gaInitScript, googleAnalyticsGa;

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
            pagecss = this.props.__itsapageinlinecss ? <style data-src="inline" type="text/css">{this.props.__itsapageinlinecss}</style> : <link data-src="inline" rel="stylesheet" href={this.props.__itsapagelinkcss} />;
        }

        stringifiedProps = JSON.stringify(this.props);

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
                {this.props.children}
                <TransferedProperties stringifiedProps={stringifiedProps} />
                {commonscript}
                {pagescript}
                {googleAnalyticsGa}
            </body>
            </html>
        );
    }
});

module.exports = Page;