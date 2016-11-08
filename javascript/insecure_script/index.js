var express = require('express');
var app = express();


app.disable('x-powered-by');

// Register templating engine
app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/insecure_script");

app.get('/', function(req, res) {
res.sendFile('index');
});

var server = app.listen(3000, function() {
var port = server.address().port;
console.log('Your app listening at http://localhost:%s', port);
});