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
        path: '/cookies',
        config: {
            // auth: {
            //     scope: ['admin'],
            //     strategy: 'general'
            // },
            handler: function(request, reply) {
                reply.reactview('cookies');
            }
        }
        // handler: function(request, reply) {
        //     reply.reactview('cookies');
        // }
    },

    {
        method: 'GET',
        path: '/information',
        config: {
            auth: {
                scope: ['admin'],
                strategy: 'general'
            },
            handler: function(request, reply) {
                reply.reactview('information');
            }
        }
    },

    {
        method: 'PUT',
        path: '/login',
        handler: function(request, reply) {
            reply.action('login');
        }
    },

    {
        method: 'PUT',
        path: '/logout',
        handler: function(request, reply) {
            reply.action('logout');
        }
    }

];

module.exports = routes;
