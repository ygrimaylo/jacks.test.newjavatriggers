'use strict';

const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/exampleDb";

app.disable('x-powered-by');

app.get('/me', function(req, res) {
const yr = req.params.yr;
// add or remove comma separated "key": values given your JSON collection
const jsonQuery = {
"year": yr, _id: 0, "quarter": 1, "daily": 1, "sms": 1, "paid": 1
};
// -1 descending or 1 ascending
const jsort = {
"quarter": -1
};
MongoClient.connect(url, function(err, db) {
if(err) {
return console.dir(err);
}
db.collection("calendar", function(err, collection) {
collection.find(jsonQuery).sort(jsort).toArray(function(err, items) {
res.send(items);
});
});
});
});

const server = app.listen(3000, function () {
const port = server.address().port;
console.log('Your app listening at http://localhost:%s', port);
});