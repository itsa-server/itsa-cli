/* eslint react/no-danger: 0 */

/**
 * Base-view react-component, which is the template for all pages.
 *
 * <i>Copyright (c) 2016 AcceleTrial - https://acceletrial.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/__view-page-template.jsx
 * @class PageTemplate
 * @since 2.0.0
*/

var React = require('react'),
    PropTypes = require('prop-types'),
    TransferedProperties = require('itsa-react-server/lib/transfered-properties'),
    isNode = (typeof global!=='undefined') && ({}.toString.call(global)==='[object global]') &&
        (!global.document || ({}.toString.call(global.document)!=='[object HTMLDocument]')),
    OFFLINE_CSS = 'body >div.offline-message {'+
        'background-color: rgba(255, 0, 0, 0.8);'+
        'color: #FFF;'+
        'text-align: center;'+
        'position: fixed;'+
        'top: 0;'+
        'right: 0;'+
        'width: 100%;'+
        'z-index: 9999;'+
        'padding: 0.4em 0;'+
        '}'+
        'html[data-offline="false"] body >.offline-message {'+
        'display: none !important;'+
        '}',
    ENVIRONMENT_CSS = 'body >div.environment-message {'+
        'background-color: rgba(105, 177, 226, 0.85);'+
        'color: #FFF;'+
        'text-align: center;'+
        'position: fixed;'+
        'top: 0;'+
        'left: 0;'+
        'z-index: 9999;'+
        'padding: 0.25em 0.75em;'+
        '}',
    NON_CLIENT_PROPS = {
        itsacommonscript: true,
        itsacommonlinkcss: true,
        itsapagescript: true,
        itsapagelinkcss: true,
        itsapageinlinecss: true,
        itsaserviceworkerscript: true,
        itsapolyfilles6script: true,
        itsapolyfillreqanimframe: true,
        offlineMessage: true,
        itsaprebootscript: true,
        itsaprebootcapturescript: true,
        itsaprebootendscript: true,
        bodyDataAttr: true
    };

class Page extends React.Component {
    /**
     * React render-method --> renders the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render() {
        var googleAnalyticsInit, pagecss, keys, keysAppProps, prebootstartscript, prebootendscript, metatags, links,
            prebootcapturescript, clientProps, offlineComponent, offlinecss, environmentcss, environmentComponent,
            props = this.props,
            appProps = props.__appProps,
            commonscript = appProps.itsacommonscript && <script src={appProps.itsacommonscript} />,
            pagescript = appProps.itsapagescript && <script src={appProps.itsapagescript} />,
            itsapolyfillreqanimframe = appProps.itsapolyfillreqanimframe && <script dangerouslySetInnerHTML={appProps.itsapolyfillreqanimframe} />,
            polyfill = appProps.itsapolyfilles6script && <script src={appProps.itsapolyfilles6script} />,
            serviceworkerscript = appProps.itsaserviceworkerscript && <script dangerouslySetInnerHTML={appProps.itsaserviceworkerscript} />,
            commoncss = (
                <link
                    data-src="common-inline"
                    href={appProps.itsacommonlinkcss}
                    rel="stylesheet" />
            ),
            externalcss = appProps.external_css_links.map((link, i) => (<link href={link} key={i} rel="stylesheet" />)),
            externaljs = appProps.external_js_links.map((link, i) => (<script key={i} src={link} />));

        appProps.isNode = isNode; // can only be set during runtime: will be `true` when serverside rendered and `false` on clientside
        if (appProps.itsapagelinkcss) {
            pagecss = (<link
                data-src="inline"
                href={appProps.itsapagelinkcss}
                rel="stylesheet" />);
        }
        else if (appProps.itsapageinlinecss) {
            pagecss = (<style
                dangerouslySetInnerHTML={appProps.itsapageinlinecss}
                data-src="inline" type="text/css" />);
        }

        if (appProps.itsaprebootstartscript) {
            prebootstartscript = (<script dangerouslySetInnerHTML={appProps.itsaprebootstartscript} />);
            prebootendscript = (<script dangerouslySetInnerHTML={appProps.itsaprebootendscript} />);
            prebootcapturescript = (<script src={appProps.itsaprebootcapturescript} />);
        }

        // clone the props-oject, but leave some parts out:
        // don't send the heavy script and css, they are not needed as props on the client:
        clientProps = {};
        keys = Object.keys(props);
        keys.forEach(function(key) {
            if (key==='__appProps') {
                clientProps[key] = {};
                keysAppProps = Object.keys(props[key]);
                keysAppProps.forEach(function(keyAppProp) {
                    if (!NON_CLIENT_PROPS[key]) {
                        clientProps[key][keyAppProp] = props[key][keyAppProp];
                    }
                });
            }
            else if (key!=='__bodyDataAttr') {
                clientProps[key] = props[key];
            }
        });

        if (appProps.showOffline) {
            offlinecss = (<style
                dangerouslySetInnerHTML={{__html: OFFLINE_CSS}}
                type="text/css" />);
            offlineComponent = (<div className="offline-message" dangerouslySetInnerHTML={appProps.offlineMessage} />);
        }
        if (appProps.showEnvironment) {
            environmentcss = (<style
                dangerouslySetInnerHTML={{__html: ENVIRONMENT_CSS}}
                type="text/css" />);
            environmentComponent = (<div className="environment-message">{appProps.node_env}</div>);
        }
        if (appProps.metatags) {
            metatags = appProps.metatags.map((metatag, i) => (<meta key={i} {...metatag} />));
        }
        if (appProps.links) {
            links = appProps.links.map((link, i) => (<link key={i} {...link} />));
        }
        return (
            <html
                data-browser={appProps.useragent.family}
                data-browser-version={appProps.useragent.major}
                data-browser-versionminor={appProps.useragent.minor}
                data-browser-versionpatch={appProps.useragent.patch}
                data-device={appProps.device}
                data-loggedin={appProps.loggedIn}
                data-node-env={appProps.node_env}
                data-offline={false}
                data-page={appProps.view}
                data-scope={appProps.scope}
                lang={appProps.lang} >
                <head>
                    <meta charSet={appProps.charset} />
                    <meta
                        content={appProps.viewport}
                        name="viewport" />
                    <meta
                        content={appProps.description}
                        name="description" />
                    {metatags}
                    {links}
                    <title>{appProps.title}</title>
                    {externalcss}
                    {offlinecss}
                    {environmentcss}
                    {commoncss}
                    {pagecss}
                    {googleAnalyticsInit}
                    {prebootstartscript}
                </head>
                <body {...props.__bodyDataAttr}>
                    <div id="view-container">
                        {props.children}
                    </div>
                    {offlineComponent}
                    {environmentComponent}
                    {prebootcapturescript}
                    {itsapolyfillreqanimframe}
                    {polyfill}
                    {externaljs}
                    <TransferedProperties clientProps={clientProps} />
                    {commonscript}
                    {pagescript}
                    {prebootendscript}
                    {serviceworkerscript}
                </body>
            </html>
        );
    }
}

Page.propTypes = {
    /**
     * the app and page specific props
     *
     * @property __appProps
     * @type String
     * @protected
     * @private
     * @since 2.0.0
    */
    __appProps: PropTypes.object.isRequired,

    __bodyDataAttr: PropTypes.object.isRequired,

    /**
     * The Component its children, which basicly consist of one react-component: the view.
     *
     * @property children
     * @type Object
     * @since 2.0.0
    */
    children: PropTypes.object
};

module.exports = Page;
