const actionFn = async (request, reply/* , options, language, manifest */) => {
    reply.login({
        username: 'Marco',
        password: 'itsa-react-server',
        scope: 'admin'
    });
};

module.exports = actionFn;
