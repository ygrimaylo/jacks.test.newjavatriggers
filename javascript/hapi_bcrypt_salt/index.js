const hapi = require('hapi');
const server = new hapi.Server();
var cryptiles = require('cryptiles');
var Bcrypt = require('bcrypt');
const Basic = require('hapi-auth-basic');
const Inert = require('inert');

'use strict';

server.connection({
host: 'localhost',
address: '127.0.0.1',
port: 3000,
});

server.route({
method: 'GET',
path: '/test/{password*}',
//config: { auth: 'simple' },
handler: function (request, reply) {
//var name = request.auth.credentials.name
//reply('hello ' + name);
reply(Bcrypt.hashSync(request.params.password, request.params.hash));

}
});

server.start();