const cwd = process.cwd(),
    listDirRecursive = require('itsa-react-server/lib/list-dir-recursive'),
    uploadS3 = require('itsa-react-server/lib/upload-s3');

const deploy = async (cdnConfig/* , manifest */) => {
    let files;
    try {
        files = await listDirRecursive.listDirObjects(cwd+'/build/public');
        /*
            each element of the array is an object like this:
            {
                localFile: {String} --> path+file
                publicFile: {String} --> public path: localFile without cwd+'/build/public/'
            }
        */

        // if you do not use AWS-S3, then you have to change the code below into your own upload method
        // otherwise, use the `uploadS3.uploadFiles` method and use the code as is!
        return uploadS3.uploadFiles(cdnConfig, files);
    }
    catch (err) {
        console.error(err);
    }
};

module.exports = {
    deploy
};
