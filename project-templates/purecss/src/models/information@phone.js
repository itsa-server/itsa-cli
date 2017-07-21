const markdown = require('itsa-react-server/lib/markdown');

const model = async (request, reply, modelConfig, language /* , manifest */) => {
    const langfile = require('../languages/'+language+'.json'), // synchronous
        pagecontent = await markdown.readFile('../markdowns/'+language+'/information.MD'); // asynchronous

    // models need to retusn an object
    // these objects are available at the view as `this.props`
    // `pagecontent` is an object like this: {__html: ''}
    return {
        pagecontent,
        hello: langfile.hello + ' from phone'
    };
};

module.exports = model;
