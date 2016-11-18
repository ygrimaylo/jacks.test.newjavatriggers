var express = require('express');
var app = express();
app.disable('x-powered-by');
//evaluates input in eval() function
app.get('/eval', function(req,res){
var code = req.query.func;
eval(code);
res.send('Data evaluated.');
});

//setTimeout function on the server side only accepts callback function and not a string
app.get('/setTimeout', function(req,res){
var code = req.query.func;
setTimeout(loggin, 1000);
res.send('Function set to execute on timeout.');
});

//setInterval function on the server side only accepts callback function and not a string
app.get('/setInterval', function(req,res){
var code = req.query.func;
setInterval(loggin, 2000);
res.send('Data set to execute every 2 seconds.');
});

//setImmediate function on the server side only accepts callback function and not a string
app.get('/immediate', function(req,res){
var code = req.query.func;
console.log("To execute "+ code);
var immediateID = setImmediate(loggin, code);
console.log("immediateID = "+immediateID);
res.send('Data set to be executed immediately.');
});

//creating an anonymous function on the server side with an untrusted string
app.get('/function1', function(req,res){
var code = req.query.func;
console.log("To execute "+ code);
var myFunc1 = new Function(code);
//Test payload: console.log("you have been hacked");
console.log("Running func1: "+myFunc1());
res.send('Function 1 executed');
});

//creating an anonymous function on the server side with arguments and an untrusted string for the body
app.get('/function2', function(req,res){
var code = req.query.func;
console.log("To execute "+ code);
var myFunc2 = new Function("arg1","arg2",code);
//Test payload: console.log("you have been hacked");return arg1*arg2;
console.log("Running func2: "+myFunc2(5, 6));

res.send('Function 1 executed');
});

secret = 'SuperSecretPhrase';
var context = new vm.createContext(sandbox);

//passing untrusted input into the Script object and then calling it on a context
app.get('/script', function(req,res){
var code = req.query.func;
//Test payload: console.log("secret: "+secret);
var script = new vm.Script(code);
for (var i = 0; i < 10; ++i) {
//script.runInContext(context);
script.runInThisContext();
}
res.send('Data evaluated 10 times.');
});

//evaluating untrusted input using the vm without the Script object
app.get('/vm', function(req,res){
var code = req.query.func;
//Test payload: console.log(secret);
vm.runInDebugContext(code);
res.send('Data evaluated once.');
});

function loggin(str) {
console.log("123 - inside a function: "+str);
}

app.listen(3000);
console.log("Server running on port 3000");