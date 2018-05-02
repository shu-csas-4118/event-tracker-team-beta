var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
    username: String,
    password: String,
    id: Number,
    events: Array
});

accountSchema.methods.login = function(username, password, callback){
    return this.model('users').findOne({ username: this.type }, callback);
}

module.exports = mongoose.model('users', accountSchema);