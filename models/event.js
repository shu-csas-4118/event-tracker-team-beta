
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
<<<<<<< HEAD
const event = mongoose.model('Event', eventSchema)

/*A mongoose schema representing one event of the application
    -String date: the event's account
    -String time: the event's time
    -String name: the event's name
    -String description: the description of the event
    -String id: the id of the event
    -Array eventRegistrants: the address of the owner of the account.*/
=======
const Event = require("../models/event");

/*Event model that shows the attributes of the event (which is an object)*/
>>>>>>> Zohar
var eventSchema = new Schema({
    date: String,
    time: String,
    Name: String,
    description: String,
    id: Number,
    eventRegistrants: Array,
    registrantCounter: Number,
    maxEventRegistrants: Number
});


<<<<<<< HEAD
/*checks if: 
    1. If account has already been added to event
    2. If event is already full and if full returns message saying they cannot register for event
    3. If not, pushes(adds) account by account id to array of registrants for event*/
eventSchema.methods.addRegistrant() = function(account){
    if(this.eventRegistrants.has(account))
        return "Registrant already added."
    if(this.registrantCounter >= maxEventRegistrants)
        return "Cannot add you to this event as it is already full"
    else {this.eventRegistrants.id.push(account)
        registrantCounter ++
        return "Registrant Added."
=======
/*checks if account has already been added to event and if not
pushes(adds) account to array of registrants for event*/
eventSchema.methods.addRegistrant() = function(eventId){
    if(this.eventRegistrants.has(eventId))
        return "Registrant already added.";
    else {this.eventRegistrants.push(eventId);
        return "Registrant Added.";
>>>>>>> Zohar
    }
};


eventSchema.methods.getEvents = function () {
};

eventSchema.methods.getEventById = function(id) {
    this.db.findOne
};


module.exports = Event;