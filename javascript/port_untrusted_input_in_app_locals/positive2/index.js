var express = require('express');
var app = express();
app.disable('x-powered-by');

app.get('/command', function(req, res){
app.locals.myvalue = req.params.input;
});