'use strict';
const hapi = require('hapi');
const Crypto = require('crypto');
const Joi = require('joi');

const server = new hapi.Server();

const port = 3000;
server.connection({
host: 'localhost',
address: '127.0.0.1',
port: port,
});

server.route({
method: 'POST',
path: '/positive/pbkdf2/positive1/{password*}',
config: {
validate: {
params: {
password: Joi.string().max(128).min(8).alphanum()
}
},
handler: function (request, reply) {
const salt = Crypto.randomBytes(256).toString('hex');
Crypto.pbkdf2(request.params.password, salt, 100000, 512, 'sha512', (err, hash) => {
if (err) throw err;
reply(hash.toString('base64'));
});
}
}
});

server.route({
method: 'POST',
path: '/positive/pbkdf2/positive2/{password*}',
config: {
validate: {
params: {
password: Joi.string().max(128).min(8).alphanum()
}
},
handler: function (request, reply) {
Crypto.randomBytes(256, (err, salt) => {
Crypto.pbkdf2(request.params.password, salt, 100000, 512, 'sha512', (err, hash) => {
if (err) throw err;
reply(hash.toString('base64'));
});
});
}
}
});

server.start(function () {
console.log('Now Visit: http://localhost:' + port);
});