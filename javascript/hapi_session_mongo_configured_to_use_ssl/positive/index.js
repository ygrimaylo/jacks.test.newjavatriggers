const Hapi = require('hapi');
var Blankie = require('blankie');
var Scooter = require('scooter');
const Inert = require('inert');
const server = new Hapi.Server();
const port = 3000;

var server2 = new Hapi.Server();

server2.connection({ port: 3000 });
server2.register([{
register: Inert,
options: {}
},{
register: Scooter,
options: {}
},{
register: Blankie,
options: {scriptSrc: 'self'}
}], 
function (err) {
if (err) {
throw err;
}
});

server.connection({
port:port
});

server.register([{
register: require('hapi-session-mongo'),
options: {
ip: '192.168.0.1',
db: 'user',
name: 'sessions',
pwd: 'shhh i am secret'
}
}]);

server.route({
method: 'GET',
path: '/',
handler: (req, reply) => {
reply('hello');
}
});

server.start(() => {
console.log('Listening at localhost:' + port);
});