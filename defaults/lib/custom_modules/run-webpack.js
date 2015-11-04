'use strict';

const webpack = require('webpack'),
      gutil = require('gulp-util'),
      fs = require('fs-extra'),
      Path = require('path'),
      jsStringEscape = require('js-string-escape'),
      appComponentBuilder = require('./app-component-builder'),
      viewComponentBuilder = require('./view-component-builder'),
      REGEXP_CONST_ITSA_VIEW_EXTRACT = /webpackJsonp(?:\D+)(\d+)(?:(?!A).)*(?:Array\((\d+))?(?:(?:.|\n|\r)*)(__itsa_view__(?:\w|@)+)/,
      SYSTEM_FILES = {
          'app.js': true,
          'routes.js': true,
          'reactserver.config.json': true,
          'file404.html': true
      };

const cleanup = (dir) => {
    let files = fs.readdirSync(dir);
    files.forEach(file => {
        let stats = fs.statSync(dir+file);
        if (stats.isFile() && !SYSTEM_FILES[file] && (file[0]!=='.')) {
            fs.removeSync(dir+file);
        }
    });
};

const cleanupApp = (dir) => {
    fs.removeSync(dir+'js/app.js');
};

const mergeApp = (dir) => {
    let srcData, destFile, startmarkerPos, endmarkerPos;
    const srcFile = dir+'js/app.js',
          srcJson = fs.readJsonSync(Path.join(dir,'../build-stats.json'));

    srcData = fs.readFileSync(srcFile, 'utf8');
    startmarkerPos = srcData.indexOf('window.__start_marker__');
    endmarkerPos = srcData.indexOf(';', srcData.indexOf('window.__end_marker__'));

    srcJson.forEach(record => {
        let view = record.name,
            componentId = record.componentId,
            requireId = record.requireId,
            inlineScript, newData, fileContent;
        // remove the `require.ensure` references before we merge the app into the common app:
        fileContent = fs.readFileSync(dir+'js/components/'+componentId+'.js', 'utf8');
        inlineScript = jsStringEscape(fileContent);
        newData = srcData.substr(0, startmarkerPos) +
                  'eval(\''+inlineScript+'\');window.__itsa_react_server||(window.__itsa_react_server={});window.__itsa_react_server.BodyComponent=arguments[2]('+requireId+');' +
                  srcData.substr(endmarkerPos+1);
        destFile = Path.join(dir, '../pageapps/'+view+'.js');
        fs.outputFileSync(destFile, newData);
    });
};

const createBuildStats = (dir) => {
    let content = '[',
        match, fileWithoutExt, fileContent, splittedItems, requireId;
    const destFile = Path.join(dir,'../build-stats.json'),
          componentsDir = dir+'js/components/',
          files = fs.readdirSync(componentsDir);
    files.forEach(file => {
        fileContent = fs.readFileSync(componentsDir+file, 'utf8');
        match = fileContent.match(REGEXP_CONST_ITSA_VIEW_EXTRACT);
        if (match) {
            fileWithoutExt = file.substr(0, file.lastIndexOf('.'));
            if (content!=='[') {
                content += ',';
            }
            requireId = match[2];
            if (requireId===undefined) {
                // not delivered by "Array()" --> we need to coun the number of comma's
                splittedItems = match[0].split(',');
                requireId = splittedItems.length - 4;
            }
            content += '{\n';
                content += '"componentId": '+fileWithoutExt+',\n';
                content += '"requireId": '+requireId+',\n';
                content += '"name": "'+match[3].substr('__itsa_view__'.length)+'"\n';
            content += '}\n';

        }
    });
    content += ']';
    fs.writeFileSync(destFile, content);
};

const buildViewFiles = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        let stats = fs.statSync(dir+file),
            view, content;
        if (stats.isFile() && (file[0]!=='.')) {
            view = file.substr(0, file.lastIndexOf('.'));
            content = fs.readFileSync(dir+file, 'utf8');
            // not just define let __itsa_view__, also use it, to prevent compiler from complaining unused vars
            // also remind that uglify will transform the code, EXCEPT when it's a srting's value.
            // Therefore, we put the placeholder inside the string as well
            content = 'let __itsa_view__=\'__itsa_view__'+view+'\';if(__itsa_view__){__itsa_view__=null;}' + content;
            fs.writeFileSync(dir+'component.'+file, content);
        }
    });
};

const removeBuiltViewFiles = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        let stats = fs.statSync(dir+file);
        if (stats.isFile() && (file.startsWith('component\.'))) {
            fs.removeSync(dir+file);
        }
    });
};

const runWebpack = (production, type, callback) => {
    let config = require('../webpack.config.'+type+'.js')(production),
        files, filename, entryDir, validFiles; // absolute dir where multiple files exists
          // note: config can be an object or an array
    const isAppComponents = (type==='apps'),
          hash = [];

    entryDir = config.context + '/',
    config.entry = {};

    // first cleanup directories: just in case an error occured in previous build and there was chunck left:
    cleanup(entryDir);
    removeBuiltViewFiles(entryDir+'views/');
    // if appComponents, then mark all view-files before build:
    isAppComponents && buildViewFiles(entryDir+'views/');

    files = fs.readdirSync(entryDir+'views');
    // first, create a list with all valid files:
    validFiles = [];
    files.forEach(file => {
        let stats, view;
        view = file.toLowerCase();
        if (view.endsWith('.js') || view.endsWith('.jsx')) {
            stats = fs.statSync(entryDir+'views/'+view);
            if (stats.isFile() && (!isAppComponents || view.startsWith('component\.'))) {
                validFiles.push(view);
            }
        }
    });

    validFiles.forEach(view => {
        let entry, tempFile;
        entry = view.substr(0, view.lastIndexOf('.'));
        if (isAppComponents) { // in case of app
            filename = view;
            filename = 'app.'+view;
            tempFile = entryDir+filename;
            if (SYSTEM_FILES[tempFile]) {
                filename = '1.'+filename;
                tempFile = entryDir+filename;
            }
            hash.push(appComponentBuilder.build(entryDir, view, tempFile, validFiles));
            config.entry[entry] = './'+filename;
        }
        else { // in case of view
            filename = view;
            tempFile = entryDir+filename;
            if (SYSTEM_FILES[tempFile]) {
                filename = '1.'+view;
                tempFile = entryDir+filename;
            }
            hash.push(viewComponentBuilder.build(entryDir, view, tempFile));
            config.entry[entry] = './'+filename;
        }
    });

    Promise.all(hash).then(
        () => {
            // run webpack
            webpack(config, function(err, stats) {
                if (isAppComponents) {
                    createBuildStats(config.output.path);
                    mergeApp(config.output.path);
                    // deleteChunks(config.output.path);
                    // copyViewApps(entryDir, config.output.path);
                    cleanupApp(config.output.path);
                    removeBuiltViewFiles(entryDir+'views/');
                }
                cleanup(entryDir);
                if (err) {
                    throw new gutil.PluginError('webpack', err);
                }
                gutil.log('[webpack]', stats.toString({
                    // output options
                    colors: true,
                    chunks: false
                }));
                callback();
            });
        },
        (err) => {
            isAppComponents && removeBuiltViewFiles(entryDir+'views/');
            cleanup(entryDir);
            callback(err);
        }
    );
};

module.exports = runWebpack;