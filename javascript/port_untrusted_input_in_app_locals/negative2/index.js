var express = require('express');
var app = express();
app.disable('x-powered-by');

app.get('/command', function(req, res){
if(req.params.input=="true")
app.locals.myvalue = "1";
else if (req.params.input=="false")
app.locals.myvalue = "0";
});