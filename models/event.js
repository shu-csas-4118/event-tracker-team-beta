var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    date: String,
    time: String,
    Name: String,
    Description: String,
    Id: Number,
    registrant: Array

});

eventSchema.methods.addRegistrant() = function(account){
    if(this.registrant.has(account))
    return "Registrant already added.";
    else {this.registrants.push(account);
        return "Registrant Added."
    }
}

function Event(){
};



Event.prototype.getEvents = function () {
    return [];
};

Event.prototype.getEventById = function(id) {
    return {id: 1};
}

module.exports = Event;