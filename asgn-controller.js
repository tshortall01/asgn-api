//import model
var Contact = require('./asgn-model');

exports.index = function(req,res){
    Contact.get(function(err,contacts){
        if (err){
            res.json(err);
        }
        res.json({
            status:"success",
            message: "Data Retrived",
            data: contacts
        })
    })
}

exports.new = function(req,res){
    var contact = new Contact();
    contact.courseName = req.body.courseName;
    contact.assignmentName = req.body.assignmentName;

    contact.save(function(err){
        if(err){
            res.json(err);
        }
        res.json({
            message: "success",
            data: contact
        })
    })
}

exports.view = function(req, res){
    Contact.findById(req.params.contact_id, function(err,contact){
        if(err){
            res.json(err);
        }
        res.json({
            message: "Found",
            data: contact
        })
    })
}

//update
exports.update = function(req,res){
    Contact.findById(req.params.contact_id, function(err, contact){
        if(err){
            res.send(err);
        }

        contact.courseName = req.body.courseName;
        contact.assignmentName = req.body.assignmentName;
        

        //Save
        contact.save(function(err){
            if(err){
                res.json(err);
            }
            res.json({
                message: "updated",
                data: contact
            })
        })
    })
}

//Delete
exports.delete = function(req, res){
    Contact.remove({
        _id: req.params.contact_id
    }, function(err,contact){
        if(err){
            res.json(err);
        }
        res.json({
            Message: "Deleted",
            data: contact
        })
    })
}