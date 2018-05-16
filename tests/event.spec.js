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