'use strict';

var fsp = require('fs-promise');
// var Path = require('path');

var viewComponentBuilder = {
    build: function(entryDir, view, tmpFile) {
        // var htmlPagePath = './'+Path.join(entryDir, '/modules/__view-page-template.jsx');
        var htmlPagePath = './modules/__view-page-template.jsx';
        // var bodyPath = '../'+Path.join(entryDir, '../views/'+view);
        var bodyPath = './views/'+view;
        var data;

        data = 'const React = require(\'react\'),';
        data += 'HtmlPage = require(\''+htmlPagePath+'\'),\n';
        data += 'Body = require(\''+bodyPath+'\'),\n';
        data += 'Document = React.createClass({\n';
            data += 'render() {\n';
                data += 'return (\n';
                    data += '<HtmlPage {...this.props}>\n';
                        data += '<Body {...this.props}/>\n';
                    data += '</HtmlPage>\n';
                data += ');\n';
            data += '}\n';
        data += '});\n';
        data += 'global.__viewComponent = Document;';
        return fsp.outputFile(tmpFile, data);
    }
};

module.exports = viewComponentBuilder;