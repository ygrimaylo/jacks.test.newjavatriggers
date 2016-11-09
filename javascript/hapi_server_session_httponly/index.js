'use strict';

var Hapi = require('hapi');
var cryptiles = require('cryptiles');
var Blankie = require('blankie');
var Scooter = require('scooter');
const Inert = require('inert');

var port = 3000; // process.env.PORT || 3000; // allow port to be set by environment

var server = new Hapi.Server();
server.app.key = 'secret_app_value_102';
server.connection({
port: port
});

server.register([
{
register: require('hapi-server-session'),
options: {
key: cryptiles.randomString(16),
expiresIn: 60000,
cookie: {
isHttpOnly: false
}
}
},{
register: Inert,
options: {}
},{
register: Scooter,
options: {}
},{
register: Blankie,
options: {scriptSrc: 'self'}
}
], function (err) {
if (err) {
throw err;
}

server.route({
method: 'GET',
path: '/',
handler: function (request, reply) {
reply('Hello World');
}
});
});

server.start(function () {
console.log('Now Visit: http://localhost:' + port + '/');
});

module.exports = server;