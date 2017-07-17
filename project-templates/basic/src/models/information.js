const markdown = require('itsa-react-server/lib/markdown'),
    languageFiles = require('itsa-react-server/lib/language-files');

const model = async (request, reply, modelConfig, language /* , manifest */) => {
    const langfile = await languageFiles.readFile(language), // asynchronous
        pagecontent = await markdown.readFile('../markdowns/'+language+'/information.MD'); // asynchronous

    // models need to retusn an object
    // these objects are available at the view as `this.props`
    // `pagecontent` is an object like this: {__html: ''}
    return {
        pagecontent,
        hello: langfile.hello
    };
};

module.exports = model;
