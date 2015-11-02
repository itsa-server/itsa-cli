Using databases is not Itsa-server specific. You should use [Async models](/async-models) to retrieve the data and return the data as a promise. To make life easier, we have created the module `itsa-mysql-promise`, that can retieve msql-data in a clean way.

## Example mysql data

### Setting up connector: /modules/connector.js
```js
"use strict";

let databaseConnections = {},
    getConnection;

const fsp = require('fs-promise'),
      workingdir = process.cwd(),
      mysqlPromise = require('itsa-mysql-promise');

getConnection = database => {
    if (!databaseConnections[database]) {
        databaseConnections[database] = fsp.readJSON(workingdir+'/reactserver.config.json')
        .then(appConfig => {
            var dbConfig = appConfig.databases[database];
            if (dbConfig) {
                return mysqlPromise.getConnection(dbConfig);
            }
            else {
                throw new Error('no db-configuration');
            }
        })
        .catch(err => {
            console.log(err);
            throw new Error('no db-configuration');
        });
    }
    return databaseConnections[database];
};

module.exports = getConnection;
```

### Setting up the model:
```js
"use strict";
var getConnection = require('../modules/connector.js')('dbName');

const model = (options, language) => {
    // this === request
    const customerid = request.query.customerid;

    return getConnection
           .then(connection => {
               return connection.getRecord('SELECT name FROM customers WHERE id=?', customerid)
           })
           .then(record => {
               return {
                   name: record.name
               };
           });
};
```