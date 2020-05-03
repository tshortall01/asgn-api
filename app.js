let express = require('express')
let app = express();
let routes = require('./asgn-router');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

var port = 8080;

app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost/asgn-api',{
    useNewUrlParser: true
})
var db = mongoose.connection;

if (!db){
    console.log("error")
}else{
    console.log("success")
}

app.use('/asgn-api', routes);

app.get('/',(req,res,) => res.send('Hello World with Express'));

app.listen(port, function(){
    console.log("Running API on port " + port)
})