Internationalization has never before become so easy. That is, if you also make use of `itsa-react-router` which deals with the proper routing on the clientside. You set up internationalization in just a few steps:

# Generate translated pages

## Step 1: Define the languages that you web-application is using

Inside `reactserver.config.json`, the languages should be defined. Always make sure a default-language is specified:

### reactserver.config.json
```json
{
    "port": 4001,
    "languages": {
        "en": "default",
        "nl": true,
        "de": false,
        "fr": false
    }
}
```

In this example, only 2 languages are activated: **en** and **nl**. English is the default language. Whenever a client is visiting the web-app, the language is selected by the following rules:

* If set by the client's uri: use this language (overruled by a url starting with **/lang**/xxxx)
* If not set by the client's uri, try use the client's preferred language
* If the client's preferred language is not activated, then use the web-app's default language

## Step 2: Create your view with models that recieve the language that is used and can return the translated data


### Example model-file

```js
'use strict';

const fs-extr = require('fs');

const model = (options, language) => {
    // this === request

    return fsp.readJson('../languages/'+language+'.json').then(
        // model should return an object: this.props.msg can be used inside the view
        langfile => return {msg: langfile['Hello world']};
    );

};

module.exports = model;
```
This example loads a json-file, but you can also `require` a file, use [markdown](/markdown), or use a [database](databases).

## Step 3 use the model's data in the view

### Simple view-file
```js
const React = require('react'),

const Body = React.createClass({
    render() {
        return (
            <div>{this.props.msg}</div>
        );
    }
});

module.exports = Body;
```

# Translated browser page-titles
The title that appear in the browser are internationalized as well. To manage this, you should maintain the files inside the **pagetitles** folder. Every language should have its own json-file, where every view gets a translated title. This languagefile is affinity-aware as well: you can define different titles per device.

### Example /pagetitles/en.json
```json
{
    "index": "Our beautiful website",
    "help": "Help whenever you need it",
    "help@phone": "Help"
}
```

Pagetitles will have their language automaticly set by the server. When switching language on the client, this will also be the case if you are using `itsa-react-router`.

# Where to store the language files

There are several places for the language-files: each with its own purpose:
* **/pagetitles/en.json** (etc) <-- pagetitles
* **/languages/en.json** (etc) <-- just words or small sentences
* **/markdowns/en/filename.MD** (etc) <-- complete pagecontent
* your custom database <-- to be setup by yourself

All these translations (with the exception of the first), should be read and handled by the models.

# Menu for switching languages

Itsa-server comes wit a special file that returns a React jsx-component that is an ul-menulist. Just include it, and you have a rendered translation-swith menu.Just make sure you pass through this.props:

```js
const LangMenuList = require('./__language_menulist');

const React = require('react');

const Body = React.createClass({
    render() {
        return (
            <div>
                <LangMenuList {...this.props}/>
                <h1>Welcome to my page</h1>
            </div>
        );
    }
});

module.exports = Body;

```

# How it works on the client

If you make use of `itsa-react-router`, everything just works. This module is aware of the languages, the titles etc. Whenever you swith language, the client-router will get the proper translated data and re-render the Body-component efficiently.