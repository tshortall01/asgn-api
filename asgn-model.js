var mongoose= require('mongoose');

//Schema
var apiSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    assignmentName: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

//Export
var Contact = module.exports = mongoose.model('contact', apiSchema);

module.exports.get = function(callback, limit){
    Contact.find(callback).limit(limit);
}