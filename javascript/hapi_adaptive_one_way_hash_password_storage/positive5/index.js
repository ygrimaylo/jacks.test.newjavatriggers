'use strict';

const Hapi = require('hapi');
const scrypt = require('scrypt');
const Joi = require('joi');
var Blankie = require('blankie');
var Scooter = require('scooter');
const Inert = require('inert');

const scryptParameters = scrypt.paramsSync(0.01);

const server = new Hapi.Server();
server.app.key = 'super_secret';
server.connection({
port: 3000
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

server.route({
method: 'POST',
path: '/negative/kdf/literal/{password*}',
config: {
validate: {
params: {
password: Joi.string().max(128).min(8).alphanum()
}
},
handler: function (request, reply) {

  scrypt.kdf(request.params.password, scryptParameters, function(err, hash) {
    if (err) throw err;
    reply(hash.toString('base64'));
  });
}
}
});

server.route({
method: 'POST',
path: '/negative/kdfSync/literal/{password*}',
config: {
validate: {
params: {
password: Joi.string().max(128).min(8).alphanum()
}
},
handler: function (request, reply) {
var hash = scrypt.kdfSync(request.params.password, scryptParameters);
reply(hash.toString('base64'));
}
}
});

server.start(function () {
console.log('Now Visit: http://localhost:' + port);
});