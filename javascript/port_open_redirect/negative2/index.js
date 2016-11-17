var express = require('express');
var session = require('express-session')
var app = express();

app.disable('x-powered-by');
app.use(session({
secret: 'some secrete code',
resave: false,
saveUninitialized: true
}));

app.get('/awesome', function(req, res) {
req.session.lastPage = '/awesome';
res.send('Your Awesome.');
});

app.get('/next', function(req, res){
console.log("go to the next page "+ req.session.lastPage);//app.locals.url); 
var _url = req.session.lastPage;
//redirect user to the value from req.session, but prepend it with protocol and host
res.redirect(302, 'https://' + req.hostname + '/' + req.session.lastPage);
});

app.listen(3000);
console.log("Server running on port 3000");