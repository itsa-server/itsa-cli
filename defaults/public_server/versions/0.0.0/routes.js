'use strict';

const routes = [
    {
        method: 'GET',
        path: '/',
        handler(request, reply) {
            // config = {modelConfig, context, title, viewport, charset, description, staticView}
            reply.reactview('index', {title: 'pagina-index', staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/faq',
        handler(request, reply) {
            reply.reactview('faq', {title: 'pagina-faq'});
        }
    },

    {
        method: 'GET',
        path: '/history',
        handler(request, reply) {
            reply.reactview('history', {title: 'pagina-history'});
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