var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*Event model that shows the attributes of the event (which is an object)*/
var eventSchema = new Schema({
    date: String,
    time: String,
    Name: String,
    description: String,
    id: Number,
    eventRegistrants: Array

});


/*checks if account has already been added to event and if not
pushes(adds) account to array of registrants for event*/
eventSchema.statics.addRegistrant() = function(account){
    if(this.eventRegistrants.has(account))
        return "Registrant already added.";
    else {this.eventRegistrants.push(account);
        return "Registrant Added.";
    }
}


Event.prototype.getEvents = function () {
    return [];
};

Event.prototype.getEventById = function(id) {
    return {id: 1};
}

module.exports = Event;