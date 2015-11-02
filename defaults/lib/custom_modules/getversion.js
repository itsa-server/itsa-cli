var fs = require('fs'),
    BASEDIR = './src',
    sortFn, production, development, productionString, developmentString, getNextDevVersion, getVersion,
    nextProdVersion, prodGreaterThanDev;

// NO arraow function here: we need 'this' to equal the exported object
getNextDevVersion = function(type) {
    var bumpVersion = this.development,
        bumb;
    if (type==='prerelease') {
        bumb = (bumpVersion[3]===undefined) ? 0 : bumpVersion[3]+1;
        return bumpVersion[0]+'.'+bumpVersion[1]+'.'+bumpVersion[2]+'-rc.'+bumb;
    }
    else if (type==='patch') {
        bumb = bumpVersion[2] + 1;
        return bumpVersion[0]+'.'+bumpVersion[1]+'.'+bumb+'-rc.0';
    }
    else if (type==='minor') {
        bumb = bumpVersion[1] + 1;
        return bumpVersion[0]+'.'+bumb+'.0-rc.0';
    }
    else if (type==='major') {
        bumb = bumpVersion[0] + 1;
        return bumb+'.0.0-rc.0';
    }
};

sortFn = (item1, item2) => {
    if (item1[0]>item2[0]) {
        return -1;
    }
    if (item1[0]<item2[0]) {
        return 1;
    }
    if (item1[1]>item2[1]) {
        return -1;
    }
    if (item1[1]<item2[1]) {
        return 1;
    }
    if (item1[2]>item2[2]) {
        return -1;
    }
    if (item1[2]<item2[2]) {
        return 1;
    }
    if (item1[3]===undefined) {
        item1[3] = -1;
    }
    if (item2[3]===undefined) {
        item2[3] = -1;
    }
    if (item1[3]>item2[3]) {
        return -1;
    }
    if (item1[3]<item2[3]) {
        return 1;
    }
    return 0;
};

getVersion = () => {
    var dirContents = fs.readdirSync(BASEDIR),
        directories = [];

    // get only the directories and build an object of it
    dirContents.forEach((file) => {
        var items;
        if (fs.statSync(BASEDIR+'/'+file).isDirectory()) {
            items = file.split('.');
            // transform into an array of integers and push it into the 'directories'-array:
            directories.push(items.map((item) => parseInt(item)));
        }
    });

    directories.sort(sortFn);

    // find the latest development and production version:
    directories.some((directory) => {
        var isDev = (directory[3]>=0);
        if (isDev) {
            if (!development) {
                development = directory;
                developmentString = directory[0]+'.'+directory[1]+'.'+directory[2]+'-rc.'+directory[3];
            }
        }
        else {
            if (!production) {
                productionString = directory[0]+'.'+directory[1]+'.'+directory[2];
                production = directory;
            }
        }
        return production && development;
    });

    if (!development) {
        development = production;
    }

    if (!production) {
        production = development;
    }

    // if production is greater than development, we MUST take production as the version to be upgraded
    prodGreaterThanDev = (directories.indexOf(production)<directories.indexOf(development));
    if (prodGreaterThanDev) {
        development = production;
        developmentString = development[0]+'.'+development[1]+'.'+development[2];
    }

    nextProdVersion = prodGreaterThanDev ? production : (development[0]+'.'+development[1]+'.'+development[2]);

    return {
        production,
        development,
        developmentString,
        productionString,
        nextProdVersion,
        getNextDevVersion
    };
};


module.exports = getVersion;