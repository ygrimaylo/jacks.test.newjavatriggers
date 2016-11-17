var express = require('express');
var app = express();
app.disable('x-powered-by');

app.get('/command', function(req, res){
if (typeof req.params.input == "number") {
app.locals.myvalue = req.params.input;
}

});