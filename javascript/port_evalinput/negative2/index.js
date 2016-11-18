var express = require('express');
var app = express();
app.disable('x-powered-by');
//maps user input and then sends hard-coded values to the eval() function
app.get('/eval_secure', function(req,res){
var code = req.query.func;
if (code == "add") {
eval("addFunc(user.salary+user.bonus)");
} else {
eval("returnResult(user.salary);");
}
res.send('Data evaluated.');
});

app.listen(3000);
console.log("Server running on port 3000");