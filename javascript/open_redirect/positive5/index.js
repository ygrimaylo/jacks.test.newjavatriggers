var express = require('express');
var app = express();

app.disable('x-powered-by');

app.get('/url',function(req, res){
//store URL from user input in app.locals
app.locals.url = req.query.url;
res.send('Your Awesome.');
});

app.get('/next', function(req, res){
console.log("go to the next page "+app.locals.url);
//redirect user to the value from app.locals.url
console.log("URL: "+ app.locals.url);
res.redirect('https://' + req.hostname + '/' + app.locals.url);
});

app.listen(3000);
console.log("Server running on port 3000");