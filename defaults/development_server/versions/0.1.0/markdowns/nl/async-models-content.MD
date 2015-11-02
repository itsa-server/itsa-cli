Modellen kunnen complexe datastructuren asynchroon opbouwen. Dit gebeurt door een Promise te retourneren in plaats van een object. De resolved Promise moet op zichzelf wel een object retourneren.

### Voorbeeld asynchronous model-bestand

```js
'use strict';

const fs-extr = require('fs');

const model = (options, language) => {
    // this === request

    return fsp.readJson('../languages/'+language+'.json').then(
        // model moet een object retourneren: this.props.msg kan door de view worden gebruikt
        langfile => return {msg: langfile['Hello world']};
    );

};

module.exports = model;
```