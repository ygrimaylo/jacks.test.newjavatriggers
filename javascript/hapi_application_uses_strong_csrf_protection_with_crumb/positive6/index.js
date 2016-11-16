'use strict';
const hapi = require('hapi');
const server = new hapi.Server();

const port = 3000;
server.connection({
host: 'localhost',
address: '127.0.0.1',
port: port,
});

server.register([
{
register: require('crumb'),
options: {
cookieOptions: {
path: '/index'
}
}
}
], function (err) {
if (err) {
throw err;
}
});

server.route({
method: 'GET',
path: '/',
handler: function (request, reply) {
reply('Hello World');
}
});

server.start(function () {
console.log('Now Visit: http://localhost:' + port);
});