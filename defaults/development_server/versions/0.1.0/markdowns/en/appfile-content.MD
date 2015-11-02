The file `app.js` is meant as the general application-file. It is active on every page (only 1 instance). It is up to the developer what to set up in this file, but the least you need is to setup a [clientside router](/router).

# Master app-file
We advice to use the next code at the least for your clientside app:

```js
var ItsaRouterClass = require('itsa-react-router');
new ItsaRouterClass();
```

# Sub app-files
You can also create sub app-files: these will be running just on a specific page. Keep in mind that you should let Reflux keep responsible for triggering UI -actions and maintaning the state of the webapplication. Sub apps may be defined whenever you need some logic to be handled that isn't UI-related.

The sub-apps should retain in the special folder: **pageapps**, where it is good practice to give the subapps the same name as the view (only with `.js` as extention). Inside the view, you <u>MUST</u> initialize these sub-apps whenever the view's component gets mount and you MUST destroy it whenever the component gets unmounted.

The sub-apps should have a constructor as well as a way to destroy themselves. We advice to make use of ITSA-classes, which has this build in.

### Example of a view using a subapp:
```js
const React = require('react'),
      SubApp = require('../pageapps/index.js');

const Body = React.createClass({
    componentDidMount() {
        this.subapp = new SubApp();
    },
    componentWillUnmount() {
        this.subapp.destroy(); // <-- destroy only available at ITSA-Classes, not ES6-Classes
    },
    render() {
        return (
            <h1>Hello World</h1>
        );
    }
});

module.exports = Body;
```