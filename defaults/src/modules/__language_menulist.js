/**
 * Lang-Menu react-component --> returns the language-menu
 *
 * <i>Copyright (c) 2016 AcceleTrial - https://acceletrial.com</i><br>
 * Proprietary License
 *
 *
 * @module views/language-menulist.jsx
 * @class LanguageMenulist
 * @since 2.0.0
*/

'use strict';

var React = require('react'),
    PropTypes = React.PropTypes,
    classList = 'pure-menu-horizontal pure-menu-list',
    classMenuItem = 'pure-menu-item',
    classMenuItemSelected = 'pure-menu-selected',
    classMenuItemLink = 'pure-menu-link';

var LanguageMenu = React.createClass({

    propTypes: {
        /**
         * The current active language
         *
         * @property __lang
         * @type String
         * @protected
         * @private
         * @since 2.0.0
        */
        __lang: PropTypes.string.isRequired,

        /**
         * An hash with all available languages, where each language is a key
         *
         * @property __languages
         * @protected
         * @private
         * @type Object
         * @since 2.0.0
        */
        __languages: PropTypes.object.isRequired,

        /**
         * The current uri of the page.
         * This is being used to set the right links on the anchor-elements.
         *
         * @property __uri
         * @protected
         * @private
         * @type String
         * @since 2.0.0
        */
        __uri: PropTypes.string.isRequired,

        /**
         * Classes for the Component.
         *
         * @property className
         * @type String
         * @since 2.0.0
        */
        className: PropTypes.string
    },

    /**
     * React render-method --> renders the Component.
     *
     * @method render
     * @return ReactComponents
     * @since 2.0.0
     */
    render: function() {
        // because this.props.__languages is an object, we need to transform it into an array first:
        var languages = [],
            mainClassName = classList,
            props = this.props,
            propsClass = props.className,
            keys = Object.keys(props.__languages);
        keys.forEach(function(lang) {
            if (props.__languages[lang]!==false) {
                languages.push(lang);
            }
        });
        propsClass && (mainClassName+=' '+propsClass);
        return (
            <ul className={mainClassName}>
                {languages.map(function(lang) {
                    var classname = classMenuItem + ((props.__lang===lang) ? ' '+classMenuItemSelected : ''),
                        link = '/'+lang+props.__uri,
                        label = lang.toUpperCase(); // <-- you can specify another label here, perhaps countryflags
                    return (
                        <li
                            className={classname}
                            key={lang}>
                            <a
                                className={classMenuItemLink}
                                data-setlang={lang}
                                href={link}
                                tabIndex={1200} >
                                {label}
                            </a>
                        </li>
                    );
                })}
           </ul>
        );
    }
});

module.exports = LanguageMenu;
