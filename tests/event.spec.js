/*'use strict' //makes sure good JS syntax is being used

//chai is a testing framework
const Event = require('../models/event')
const Account = require('../models/account')
const expect = require('chai').expect
const assert = require('chai').assert




const event = new Event();

describe ('Event module', () => {
    describe('"seed"', () => {
        it ('should have a seed method', () => {
            expect(event.seed).to.be.a('function');
        })
    })

    before((done) => {
        const db = mongoose.connect('mongodb://localhost/eventtrack');
        done();
    });

    after((done) => {
        mongoose.connection.close();
        done();
    });

    beforeEach( (done) => {
        var event = new Event({
            date: "June 5th, 2018",
            time: '1:30pm-3:30',
            name: s1234,
            description: "insert description",
            id: "1234",
            eventRegistrants: []
        });

        event.save((error) => {
            if (error) console.log('error' + error.message);
            done();
        });
    });


    describe('"getEventDate', () => {
        it('should have a getEventDate method', () => {
            expect(event.getEventDate).to.be.a('function');
        })

        it('should return event date', () => {
            expect(event.getEventDate()).to.be.a('string');
        })
    })




    describe('"getEventTime', () => {
        it('should have a getEventTime method', () => {
            expect(event.getEventTime).to.be.a('function');
        })

        it('should return event Time', () => {
            expect(event.getEventTime()).to.be.a('string');
        })
    })




    describe('"getEvents"', () => {
        it ('should have a getEvents method', () => {
            expect(event.getEvents).to.be.a('function');
        })

        it('should return an array of events', () => {
            expect(event.getEvents()).to.be.an('array');
        })
    })




    describe('"getEventName', () => {
        it('should have a getEventName method', () => {
            expect(event.getEventName).to.be.a('function');
        })

        it('should return array of event names', () => {
            expect(event.getEventName(1)).to.be.an('object');
        })
    })




    describe('"getEventDescription', () => {
        it('should have a getEventDescription method', () => {
            expect(event.getEventDescription).to.be.a('function');
        })

        it('should return array of event registrants', () => {
            expect(event.getEventDescription()).to.be.a('string');
        })
    })




    describe('"getEventById"', () => {
        it ('should have a getEventById method', () => {
            expect(event.getEventById).to.be.a('function');
        })

        it('should return an array of events', () => {
            expect(event.getEventById(1)).to.be.an('object');
        })
    })




    describe('"getEventRegistrants', () => {
        it('should have a getEventRegistrants method', () => {
            expect(event.getEventRegistrants).to.be.a('function');
        })

        it('should return array of event registrant names', () => {
            expect(event.getEventRegistrants(1)).to.be.an('object');
        })
    })



})*/


'use strict' //makes sure good JS syntax is being used

const Event = require('../models/event')
const Account = require('../models/account')
const expect = require('chai').expect
const assert = require('chai').assert
const mongoose = require('mongoose')


describe('Event tests', () => {
    before((done) => {
        const db = mongoose.connect('mongodb://localhost/eventtrack');
        done();
    });

    after((done) =>{
        mongoose.connection.close();
        done();
    });

    beforeEach((done) => {
        var event = new Event({
            date:'06/05/2018',
            time:'2:30pm',
            name:'event name',
            description:'event description',
            id:'01234',
            registrantCounter: 0,
            maxeventRegistrants: 50,

        });

        event.save((error) => {
            if(error) console.log('error ' + error.message);
            done();
        });
    });



describe ('Event module', () => {
    /*describe('"seed"', () => {
        it ('should have a seed method', () => {
            expect(event.seed).to.be.a('function');
        })
    })*/



    it('should have a function to get event date.', function (done) {
        Event.findOne({name: 'event name'}, function (error, event) {
            expect(event.date).to.eql('06/05/2018');
            done();
        })
    });




    it('should have a function to get event time.', function (done) {
        Event.findOne({ name: 'event name'}, function (error, event) {
            expect(event.time).to.eql('2:30pm');
            done();
        })
    });




    it('should have a function to get event name.', function (done) {
        Event.findOne({ event: 'event name'}, function (error, event) {
            expect(event.name).to.eql('event name');
            done();
        })
    });



    it('should have a function to get an event by name.', function (done) {
        Event.findOne({ event: 'event name'}, function (error, event) {
            expect(event.name).to.eql('event name');
            done();
        })
    });




    it('should have a function to get the description of the event.', function (done) {
        Event.findOne({ name: 'Event Name' }, function (error, event) {
            assert(event.description, 'event description');
            done();
        })
    });




    it('should have a function to get event by id.', function (done) {
        Event.findOne({ name: 'event name'}, function (error, event) {
            expect(event.id).to.eql('01234');
            done();
        })
    });




    it('should have a method to get the current count of event registrants.', function (done) {
        Event.findOne({ name: 'Event Name' }, function (error, event) {
            expect(event.registerCounter).to.eql(0);
            done();
        })
    });

    
    
    it('should have a function to get the max Registrants of event.', function (done) {
        Event.findOne({ name: 'Event Name' }, function (error, event) {
            expect(event.maxRegistrants).to.eql(50);
            done();
        })
    });

    })
})