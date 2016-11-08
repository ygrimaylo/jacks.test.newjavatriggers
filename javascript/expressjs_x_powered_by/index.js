'use strict';

var express = require('express');
var helmet = require('helmet');
var app = express();

app.get('/', function (req, res) {
res.send('Hello World');
});

var server = app.listen(3000, function () {
var port = server.address().port;
console.log('Your app listening at http://localhost:%s', port);
});