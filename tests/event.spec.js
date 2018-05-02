'use strict' //makes sure good JS syntax is being used

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



})