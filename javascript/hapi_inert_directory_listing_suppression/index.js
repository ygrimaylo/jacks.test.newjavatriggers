const hapi = require('hapi');
const server = new hapi.Server();
var cryptiles = require('cryptiles');
var Bcrypt = require('bcrypt');
const Basic = require('hapi-auth-basic');
const Inert = require('inert');
var crypto = require('crypto');

'use strict';

server.connection({
host: 'localhost',
address: '127.0.0.1',
port: 3000,
});

//server.register(Inert, () => {});
server.register(Inert, function () {});

server.route({
method: 'GET',
path: '/{path*}',
handler: {
directory: {
path: '../test.html',
listing: true
}
}
});

server.start();