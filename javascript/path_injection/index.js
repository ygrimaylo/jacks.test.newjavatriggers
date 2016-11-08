'use strict';

var express = require('express');
var path = require('path');
var app = express();

app.disable('X-Powered-By');

function getUserHomeDirectory(username) {
console.log("Resolving " + username + " to home directory");
return path.resolve(__dirname, 'home', username);
}

app.get('/path/:username', function(req, res) {
var username = req.params.username;
res.send('Your home directory is located at: ' + getUserHomeDirectory(username));
});

var server = app.listen(3000, function () {
var port = server.address().port;
console.log('Your app listening at http://localhost:%s', port);
});