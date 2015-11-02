'use strict';

const routes = [
    {
        method: 'GET',
        path: '/',
        handler(request, reply) {
            reply.reactview('index');
        }
    },

    {
        method: 'GET',
        path: '/information',
        handler(request, reply) {
            reply.reactview('information');
        }
    }
];

module.exports = routes;