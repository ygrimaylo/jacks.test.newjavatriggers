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
register: require('hapi-auth-jwt2')
}
], function (err) {
if (err) {
throw err;
}

server.route({
method: 'GET',
path: '/cors/origin/4',
config: {
cors: {
origin: ['*']
}
},
handler: function (request, reply) {
reply('Hello World');
}
});
});

server.start(function () {
console.log('Now Visit: http://localhost:' + port);
});