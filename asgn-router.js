// Init express route
let router = require("express").Router();

router.get('/', function(req,res){
    res.json({
        status: "Api is working",
        message: 'Welcome to my Api'
    })
})

module.exports = router;