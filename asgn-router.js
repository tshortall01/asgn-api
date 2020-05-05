let router = require("express").Router();
let controller = require ('./asgn-controller')

router.route("/contacts")
    .get(controller.index)
    .post(controller.new)

router.route('/contacts/:contact_id')
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