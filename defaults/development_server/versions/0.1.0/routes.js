'use strict';

const routes = [
    {
        method: 'GET',
        path: '/',
        handler(request, reply) {
            // config = {modelConfig, props, viewport, charset, description, staticView}
            reply.reactview('index', {staticView: true});
        }
    },

    {
        method: 'GET',
        path: '/installation',
        handler(request, reply) {
            reply.reactview('installation');
        }
    },

    {
        method: 'GET',
        path: '/configuration',
        handler(request, reply) {
            reply.reactview('configuration');
        }
    },

    {
        method: 'GET',
        path: '/pages',
        handler(request, reply) {
            reply.reactview('pages');
        }
    },

    {
        method: 'GET',
        path: '/models',
        handler(request, reply) {
            reply.reactview('models');
        }
    },

    {
        method: 'GET',
        path: '/async-models',
        handler(request, reply) {
            reply.reactview('asyncmodels');
        }
    },

    {
        method: 'GET',
        path: '/appfile',
        handler(request, reply) {
            reply.reactview('appfile');
        }
    },

    {
        method: 'GET',
        path: '/different-devices',
        handler(request, reply) {
            reply.reactview('devices');
        }
    },

    {
        method: 'GET',
        path: '/controller',
        handler(request, reply) {
            reply.reactview('controller');
        }
    },

    {
        method: 'GET',
        path: '/databases',
        handler(request, reply) {
            reply.reactview('databases');
        }
    },

    {
        method: 'GET',
        path: '/markdown',
        handler(request, reply) {
            reply.reactview('markdown');
        }
    },

    {
        method: 'GET',
        path: '/router',
        handler(request, reply) {
            reply.reactview('router');
        }
    },

    {
        method: 'GET',
        path: '/i18n',
        handler(request, reply) {
            reply.reactview('i18n');
        }
    },

    {
        method: 'GET',
        path: '/developing',
        handler(request, reply) {
            reply.reactview('developing');
        }
    },

    {
        method: 'GET',
        path: '/production',
        handler(request, reply) {
            reply.reactview('production');
        }
    },

    {
        method: 'GET',
        path: '/gulp',
        handler(request, reply) {
            reply.reactview('gulp');
        }
    }

];

module.exports = routes;