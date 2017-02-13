'use strict';
const Hapi = require('hapi');
require('dotenv').load();

const server = new Hapi.Server();
server.connection({
    port: process.env.PORT || 8000
});

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/hello',
        handler: (request, reply) => {
            reply.file('./public/index.html');
        }
    });
});

server.route({
  method: 'GET',
  path: '/api/search/',
  handler: (request, reply) => {

    if (request.query.q) {


    } else {

    }
    reply({done: "search completed"})
  }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
