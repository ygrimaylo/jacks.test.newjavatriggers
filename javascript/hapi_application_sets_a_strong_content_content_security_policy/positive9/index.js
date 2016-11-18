var Hapi = require('hapi');
var Scooter = require('scooter');
var Blankie = require('blankie');
const Inert = require('inert');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.register([{
register: Inert,
options: {}
},{
register: Scooter,
options: {}
}], 
function (err) {
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
console.log('info', 'Server running at: ' + server.info.uri);
});