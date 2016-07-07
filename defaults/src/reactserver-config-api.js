// This file is just documentation, so it will end up inside the API as generated by YUIDIC

/**
 * Server configuration as set by <b>reactserver.config.json</b>
 *
 * <i>Copyright (c) 2015 ezHome - http://ezhome.com</i><br>
 * Proprietary License
 *
 *
 * @module reactserver.config.json
 * @class ServerConfig
*/

/**
 * Port to run the Hapi-server.
 *
 * @property port
 * @type Array
 * @default 4001
 * @since 2.0.0
*/


/**
 * Maximum filesize within imagefiles to be transformed into DATA-URI images.
 * This prevents the client for making meny request to small image-files,
 * though this means that the css-file gets enlarged.
 *
 * Do not set this value too high, for the size inside the css-file is bigger than
 * the filesize itself.
 *
 * Used by webpack's url-loader plugin.
 *
 * @property url-loader-limit
 * @type number
 * @default 10240
 * @since 2.0.0
*/


/**
 * Whether the server should be in debug-mode.
 *
 * @property debug
 * @type Boolean
 * @default false
 * @since 2.0.0
*/


/**
 * Whether the css should be inline. Note that inline css prevents a blocking request on the client-side, to this might be preferable.
 * On the other hand: large css-files should not be inlined --> this way they can be cached on the clientside.
 *
 * @property inlinecss
 * @type Boolean
 * @default false
 * @since 2.0.0
*/


/**
 * The Google Analytics API-key. When set, then Google-analytics is automaticly activated for every pagevisit.
 *
 * @property page-description
 * @type String
 * @default ""
 * @since 2.0.0
*/


/**
 * The sessiontime to store the client-state into the local storage
 *
 * @property sessiontime
 * @type number
 * @default 0
 * @since 2.0.0
*/


/**
 * The meta-viewport, to be set for three devices: desktop, phone and tablet.
 * These three devices are properties of the meta-viewport-object and should all hold a
 * String representing the meta-viewport of this device.
 *
 * @property meta-viewport
 * @type Object
 * @since 2.0.0
*/


/**
 * The languages that are being used by this web-application.
 *
 * @property languages
 * @type Object
 * @default {en: "default"}
 * @since 2.0.0
*/


/**
 * Any database settings, to be used inside the Models.
 *
 * @property databases
 * @type Object
 * @since 2.0.0
*/


/**
 * Any anvironment-specific configuration. Environment-specific configuration
 * will overrule the general settings as sson as this environment is running.
 *
 * @property environments
 * @type Object
 * @since 2.0.0
*/
