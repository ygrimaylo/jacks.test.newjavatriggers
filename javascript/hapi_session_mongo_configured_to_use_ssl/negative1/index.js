const Hapi = require('hapi');
var Blankie = require('blankie');
var Scooter = require('scooter');
const Inert = require('inert');
const server = new Hapi.Server();
const server2 = new Hapi.Server();
const port = 3000;

server.connection({
port:port
});

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

server.pack.register({
plugin: require('hapi-session-mongo'),
options: {
db: 'user',
name: 'sessions',
pwd: 'shhh i am secret',
ssl: true
}
});

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