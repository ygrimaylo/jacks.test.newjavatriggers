const Hapi = require('hapi');
var Blankie = require('blankie');
var Scooter = require('scooter');
const Inert = require('inert');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

server.register([{
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

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  config: {
    handler: function (request, reply) {
      reply({foo: 'bar'});
    },
    jsonp: 'callback'
  }
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
