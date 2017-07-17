const cwd = process.cwd(),
    listDirRecursive = require('itsa-react-server/lib/list-dir-recursive'),
    cleanupS3 = require('itsa-react-server/lib/cleanup-s3');

const cleanup = async (cdnConfig/* , manifest */) => {
    const keepCdnFiles = await listDirRecursive.listDir(cwd+'/build/public');
    // if you do not use AWS-S3, then you have to change the code below into your own upload method
    // otherwise, use the `uploadS3.uploadFiles` method and use the code as is!
    return cleanupS3.cleanupFiles(cdnConfig, keepCdnFiles);
};

module.exports = {
    cleanup
};
