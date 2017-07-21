var routes = [
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply.reactview('index');
        }
    },

    {
        method: 'GET',
        path: '/information',
        handler: function(request, reply) {
            reply.reactview('information');
        }
    }

];

module.exports = routes;
