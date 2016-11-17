var express = require('express');
var app = express();
app.disable('x-powered-by');

app.locals.myvalue = '123';