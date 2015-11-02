'use strict';

const routes = [
    {
        method: 'GET',
        path: '/',
        handler(request, reply) {
            // config = {modelConfig, context, viewport, charset, description, staticView}
            reply.reactview('index', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/faq',
        handler(request, reply) {
            reply.reactview('faq');
        }
    },

    {
        method: 'GET',
        path: '/history',
        handler(request, reply) {
            reply.reactview('history');
        }
    },

    {
        method: 'GET',
        path: '/contact/{name}',
        handler: function (request, reply) {
            reply.reactview('contact');
//            reply.action('contact');
        }
    }
];


module.exports = routes;