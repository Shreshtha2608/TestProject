var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{type: String},
    id:{type: Number},
});

module.exports = mongoose.model('usermodel',userSchema);