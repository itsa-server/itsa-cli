Models can build complex datastructures asynchronously. This is done by returning a Promise instead of a plain object. The resolved Promise should return an object.

### Example asynchronous model-file

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