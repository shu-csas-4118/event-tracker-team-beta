
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Event = require("../models/event");

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
eventSchema.methods.addRegistrant() = function(eventId){
    if(this.eventRegistrants.has(eventId))
        return "Registrant already added.";
    else {this.eventRegistrants.push(eventId);
        return "Registrant Added.";
    }
};


eventSchema.methods.getEvents = function () {
};

eventSchema.methods.getEventById = function(id) {
    this.db.findOne
};

module.exports = Event;