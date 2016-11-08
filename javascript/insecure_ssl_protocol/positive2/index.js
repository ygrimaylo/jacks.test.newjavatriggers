'use strict';

var https = require('https');
var fs = require('fs');

var options = {
key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
secureProtocol: 'SSLv3_method'
};

https.createServer(options, function (req, res) {
res.writeHead(200);
res.end("hello world\n");
}).listen(8000);