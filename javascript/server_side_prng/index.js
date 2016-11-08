'use strict';

var express = require('express');
var app = express();

app.disable('x-powered-by');

var min = 1;
var max = 10;
var rnd1 = Math.floor(Math.random() * (max - min) + min - Math.random());

app.post('/', function(req, res) {
req.session.sessionId = max < rnd1 ? rnd1: max;
res.send('PRNG test');
});

var server = app.listen(3000, function () {
var port = server.address().port;
console.log('Your app listening at http://localhost:%s', port);
});