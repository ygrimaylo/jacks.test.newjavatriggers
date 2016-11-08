'use strict';

var express = require('express');
var expSess = require("express-session");
var app = express();
var bodyParser = require('body-parser');

// support json encoded bodies
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

// Register templating engine
app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/static/views");
app.use(express.static(__dirname + '/static'));
app.disable('x-powered-by');

// ======= for MongoDB mass assignment test =======
//require('./massassignment/test.insert-one-param')(app);
//require('./massassignment/test.insert-two-params')(app);
require('./massassignment/test.positive-mongoose')(app);



var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Your app listening at http://localhost:%s', port);
});
