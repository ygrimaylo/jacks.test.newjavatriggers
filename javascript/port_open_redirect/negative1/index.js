var express = require('express');
var app = express();

app.disable('x-powered-by');
app.use(express.static(__dirname + '/public'));

app.post('/url',function(req, res){
//store value from user input in app.locals
app.locals.url = "http://tst.com";
console.log(("/url: "+url));
res.send('GET /url response');
});

app.get('/next', function(req, res){
console.log("go to the next page "+app.locals.url);
var url = app.locals.url;
//redirect user to the value from app.locals, but prepend it with protocol and host
console.log(("URL: "+url));
res.redirect(302, 'https://' + req.hostname + '/' + url);
});

app.post('/next2', function(req, res){
console.log("go to the next page "+app.locals.url);
var _url = app.locals.url;
//Diferent ways to concatenate
var _redirectURL = req.protocol;
_redirectURL += '' + req.hostname + '/';
res.redirect(302, _redirectURL);
});

app.post('/next3', function(req, res){
var url = app.locals.url; //Using concat function var _redirectURL = 'https://'.concat(req.hostname,'/', url); console.log("go to the next page "+redirectURL);
res.redirect(302, _redirectURL);
})

app.listen(3000);
console.log("Server running on port 3000");