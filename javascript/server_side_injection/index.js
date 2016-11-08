'use strict';

var express = require('express');
var app = express();

var pmongo = require('promised-mongo');
var db = pmongo('contactlist', ['contactlist']);

app.disable('x-powered-by');

app.post('/negative', function(req, res) {
var x = req.body;
eval(x + 3);
res.send('Hello World');
});

app.post('/positive', function(req, res) {
eval('console.log("Hello World")');
res.send('Hello again');
});

var server = app.listen(3000, function () {
var port = server.address().port;
console.log('Your app listening at http://localhost:%s', port);
});