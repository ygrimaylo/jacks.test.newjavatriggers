var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var validator = require('validator');
var sanitize = require('mongo-sanitize');
var helmet = require('helmet');

app.disable('x-powered-by');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

urlMap = {
"home": "http://mysite.com/",
"confirm": "http://mysite.com/confirmation/",
"logout": "http://mysite.com/logout",
"partner1": "http://partner1.com/"
}

app.post('/next', function(req, res){
var url = urlMap[res.param.url];
if (url != undefined) {
res.redirect(urlMap[res.params.url]);
} else {
res.redirect(urlMap["home"]);
}
});