# reactserver.config.json

**reactserver.config.json** is the application's configuration file. It has the folowing structure:

```json
{
    "port": 4001,
    "url-loader-limit": "16384",
    "debug": false,
    "inlinecss": true,
    "page-description": "my awesome page",
    "google-analytics": "UA-12345",
    "sessiontime": 10,
    "meta-viewport": {
        "desktop": "width=device-width, initial-scale=1.0",
        "phone": "user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui",
        "tablet": "user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui"
    },
    "languages": {
        "en": "default",
        "nl": true,
        "de": false,
        "fr": false
    },
    "databases": {
        "db1": {
            "database": "db1",
            "user": "my_username",
            "password": "my_password"
        }
    },
    "environments": {
        "development": {
            "devserver": true,
            "port": 5001,
            "url-loader-limit": "0",
            "debug": false,
            "inlinecss": false
        },
        "phone": {
            "devserver": true,
            "port": 5001,
            "url-loader-limit": "0",
            "debug": false,
            "inlinecss": true,
            "device": "phone"
        },
        "tablet": {
            "devserver": true,
            "port": 5001,
            "url-loader-limit": "0",
            "debug": false,
            "inlinecss": true,
            "device": "tablet"
        }
    }
}
```

# Explanation properties

* **port** --> the port on which the webapp will be started
* **url-loader-limit** --> limit where required url-images will be created as inline images (to decrease requests). See [webpack/url-loader](https://github.com/webpack/url-loader). When set to **0**, all images will be created inline.
* **debug** --> whether debugging is on or off (console messages)
* **inlinecss** --> whether the css should be inline (recomended), or with an external file
* **page-description** --> the description inside the html-head
* **google-analytics** --> when set, this id will be used to update google-analytics
* **sessiontime** --> time (in **seconds**) that the apps **state** is kept in localstorage, so the state can be re-used when the browser leaves the application
* **meta-viewport** --> html-meta tags, should be set for **desktop, tablet and phone** separately.
* **languages** --> the languages this application is using. Only languages set to **true** are activated and **there should always be one <u>default</u> language
* **databases** --> to specify access to your databases. This is just plain data without functionality by itsa-server itself. However, if you include database-modules, then they should retrieve their data from this entry-point.
* **environments** --> to specify different environments.
