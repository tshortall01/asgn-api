let router = require("express").Router();
let controller = require ('./asgn-controller')

router.route("/assignment")
    .get(controller.index)
    .post(controller.new)

router.route('/assignment/:contact_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete)

router.get('/', function(req,res){
    res.json({
        status: "Api is working",
        message: 'Welcome to my Api'
    })
})

module.exports = router;