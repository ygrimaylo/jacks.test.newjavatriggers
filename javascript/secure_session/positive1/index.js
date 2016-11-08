'use strict';

var express = require('express');
var expSess = require("express-session");
var app = express();

var sess = {
secret: 'keyboard cat',
key: "sessionId",
resave: true,
saveUninitialized: true,
cookie: {
httpOnly: true,
secure: true,
domain: '.example.com',
path: '/admin'
}
};

if (app.get('env') === 'test') {
app.set('trust proxy', 1);
sess.cookie.secure = false;
}

app.disable('x-powered-by');
app.use(expSess(sess));

app.get('/', function (req, res) {
res.send('Hello World');
});

var server = app.listen(3000, function () {
var port = server.address().port;
console.log('Your app listening at http://localhost:%s', port);
});