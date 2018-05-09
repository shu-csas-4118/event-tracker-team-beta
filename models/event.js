var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*A mongoose schema representing one event of the application
    -String date: the event's account
    -String time: the event's time
    -String name: the event's name
    -String description: the description of the event
    -String id: the id of the event
    -Array eventRegistrants: the address of the owner of the account.*/
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
    }
}


Event.prototype.getEvents = function () {
    return [];
};

Event.prototype.getEventById = function(id) {
    return {id: 1};
}

module.exports = Event;