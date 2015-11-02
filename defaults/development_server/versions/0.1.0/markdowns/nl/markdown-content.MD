De views kunnen ook `markdown`-bestanden renderen. Dit is erg handig: nu hoeft er geen html-code te worden geschreven. Om markdown te laten integreren met de views, maakt dit framework het mogelijk om `markdown-code` via een property van **this.props** door te geven. Omdat `markdown` html-code is, zul je via `dangerouslySetInnerHTML` moeten renderen om html terug te krijgen.



# Stap 1: laad markdown in het model-bestand via require('itsa-react-fs-markdown')

```js
'use strict';

const fsMD = require('itsa-react-fs-markdown')(__dirname); //<-- de huidige map moet worden doorgegeven als argument

const model = (options, language) => {
    // this === request
    const pagecontentPromise = fsMD.readFile('../markdowns/'+language+'/index.MD');

    return pagecontentPromise.then(response => {
        // modellen moeten een object retourneren
        // in dit geval krijgt de view toegang tot this.props.pagecontent
        // de response ziet er uit als: {__html: ''}
        return {
            pagecontent: response
        };
    });
};

module.exports = model;
```

# Stap 2: Gebruik this.props bij renderen van de view

```js
// Indien we code willen highlighten, maken we gebruik van highlightjs
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