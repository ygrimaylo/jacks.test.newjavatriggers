'use strict';

var https = require('https');
var fs = require('fs');

https.globalAgent.options.secureProtocol = 'SSLv2_method';
var options = {
key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

https.createServer(options, function (req, res) {
res.writeHead(200);
res.end("Hello World\n");
}).listen(8000);