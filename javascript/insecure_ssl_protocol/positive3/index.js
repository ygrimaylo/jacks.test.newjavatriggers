'use strict';

var https = require('https');
var fs = require('fs');

var options = {
hostname: 'example.com',
port: 443,
path: '/',
method: 'GET'
};

var aOption = {
key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
secureProtocol: 'SSLv2_method',
ca: fs.readFileSync('ca.cert.pem')
};

options.agentOptions = aOption;

var req = https.request(options, function(res) {
console.log(res);
});