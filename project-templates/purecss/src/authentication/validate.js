/**
 * Performs a session-validation. Is used by the HAPI-plugin: `itsa-authentication`
 *
 * <i>Copyright (c) 2016 AcceleTrial - https://acceletrial.com</i><br>
 * Proprietary License
 *
 *
 * @module modules/authentication/validate
 * @class Validate
 * @since 2.0.0
*/

// setting up authentication:

/**
 * Validates the session and calls the callback.
 *
 * Reads session.id (which is a users.id from hthe table `users`) from the table `users`
 * and compares session's `scope` and `password` with those from hte users-record.
 * When there is a match, the callback is called with: `callback(null, true)`, otherwise
 * `callback(errorMsg, false)`
 *
 * @method validate
 * @param session {Object} a "table-definition"
 * @param callback {Function} a "table-definition"
 * @since 2.0.0
 */
const validate = async function(request, reply, authCookie) {
    // return true;
    return authCookie.isLoggedIn();
};

module.exports = validate;
