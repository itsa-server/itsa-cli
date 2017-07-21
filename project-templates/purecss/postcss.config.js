const cwd = process.cwd(),
    resolver = require(cwd+'/node_modules/itsa-react-server/lib/webpack/css-import-resolver');

module.exports = {
    plugins: {
        'stylelint': {},
        'postcss-import': {
            resolve: resolver
        },
        'postcss-cssnext': {}
    }
};
