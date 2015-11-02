The views can render markdown files. This is very handy: you don't need to write a lot of html-code. To make markdown integrated with the views, this framework makes it possible to pass through markdown-code by a property of **this.props**. Because markdown is html-code, you will need `dangerouslySetInnerHTML` to render it as html.



# Step 1: load markdown inside the modelfile requiring 'itsa-react-fs-markdown'

```js
'use strict';

const fsMD = require('itsa-react-fs-markdown')(__dirname); //<-- need to pass the current directory as argument

const model = (options, language) => {
    // this === request
    const pagecontentPromise = fsMD.readFile('../markdowns/'+language+'/index.MD');

    return pagecontentPromise.then(response => {
        // models need to return an object
        // in this case, the view will get access to this.props.pagecontent
        // the response will have a form like: {__html: ''}
        return {
            pagecontent: response
        };
    });
};

module.exports = model;
```

# Step 2: Use this.props while rendering the view

```js
// Whenever we need to highlight the code, we make use of highlightjs
require('../assets/css/highlights/github.css');

const React = require('react'),
      Menu = require('../modules/menu.jsx');

const Body = React.createClass({
    render() {
        return (
            <div>
                <Menu {...this.props}/>
                <div dangerouslySetInnerHTML={this.props.pagecontent} />
            </div>
        );
    }
});

module.exports = Body;
```