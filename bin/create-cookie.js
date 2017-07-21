'use strict';

const fs = require('fs-extra'),
    passwordCreator = require('password-creator'),
    pwSets = {
        letters: true,  // abcdefghijklmnopqrstuvwxyz
        lowercase: true,
        uppercase: true,
        digits: true, // 0123456789
        special: true,  // !@#$%^&*()_+-={}[]|:;"'<>,.?/\~`
        space: false, // could password have spacebars?
        exclude: "'" // a string containing signs you don't want your password have eg. "abc"
    },
    pwConfig = {
        length: 40,
        sets: pwSets
    };

const create = async dirName => {
    try {
        const keyAppAuth = passwordCreator.create(pwConfig),
            keyBodyDataAttr = passwordCreator.create(pwConfig),
            keyNotExposed = passwordCreator.create(pwConfig),
            keyProps = passwordCreator.create(pwConfig);
        let cookierc =
`/*
* This file contains the passwords for generating encrypted cookies.
* These passwords are web-apscific and are generated randomly during the creation
* of the web-app by "itsa-cli create {webapp}".
*
* NEVER CHANGE these passwords: it will lead into invalid encryption of clients who have their cookies set.
* If you still feel you need to, then ensure that the passwords are at the least 32 characters.
*/

module.exports = {
    'app-authentication': '${keyAppAuth}',
    'body-data-attr': '${keyBodyDataAttr}',
    'not-exposed': '${keyNotExposed}',
    'props': '${keyProps}'
};
`;
        await fs.writeFile(process.cwd()+'/'+dirName+'/.cookierc', cookierc, 'utf8');
    }
    catch (err) {
        console.warn(err);
    }
};

module.exports = {
    create
};
