'use strict';

var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();

var routesArray = ['/login', '/auth', '/signup', '/email', '/chPassW', '/logout', '/snapshot'];

app.disable('x-powered-by');
app.use(routesArray, session({
genid: tokenGen,
name: 'auth_cookie',
secret: 'Nk8Y9b22n88QUtkR7uO3Bdgf274mlh68',
cookie: {
secure: true,
httpOnly: true
},
}));

function tokenGen(req) {
const token = String(Math.floor(Math.random() * 1000000));
return token;
}

app.get('/', function(req, res){
res.send('Unauthenticated page');
});

app.get('/login', function(req, res){
res.send('You are authenticated');
});

app.listen(3000);
console.log("Server running on port 3000");