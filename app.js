let express = require('express')
let app = express();
let routes = require('./asgn-router');

var port = 8080;

app.use('/asgn-api', routes);

app.get('/',(req,res,) => res.send('Hello World with Express'));

app.listen(port, function(){
    console.log("Running API on port " + port)
})