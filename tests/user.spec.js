'use strict'

const expect = require('chai').expect;
const mongoose = require('mongoose');
const Account = require ("../models/account");


describe('Tests for user account', () =>
 {

    before((done) => 
    {
        const db = mongoose.connect('mongodb://localhost/eventtrack');
        done();
    });

    after((done) =>
     {
        mongoose.connection.close();
        done();
    });

    beforeEach( (done) =>
     {
        var account = new Account({
            username: 'john.doe@shu.edu',
            password: 'password',
            id: s1234,
            events: [],
            firstName: 'John',
            lastName: 'Doe',
            address: '400 South Orange Ave, South Orange, NJ 07079'
        });

        account.save((error) => 
        {
            if (error) console.log('error' + error.message);
            done();
        });
    });

    it('Account should have a username that is a String', () => 
    {
        expect(account.username).to.be.a('String');
    });

    it('Account should have a password that is a String', () => 
    {
        expect(account.password).to.be.a('String');
    });

    it('Account should have an ID that is a Number.', () =>
     {
        expect(account.id).to.be.a('Number');
    });

    it('Account should have an array of events.', () =>
     {
        expect(account.events).to.be.an('Array');
    });

    it('Account should have a first name that is a String', () =>
     {
        expect(account.firstName).to.be.a('String');
    });

    it('Account should have a last name that is a String', () =>
    {
        expect(account.lastName).to.be.a('String');
    });

    it('Account should have an address that is a String', () =>
     {
        expect(account.address).to.be.a('String');
    });

    it('Find a user by their username', (done) =>
     {
        Account.findOne({ username: 'john.doe@shu.edu' }, (err, account) =>
        {
            expect(account.username).to.eql('john.doe@shu.edu');
            done();
        });
    });

    it('Find a user by their ID', (done) => 
    {
        Account.findOne({ id: '1234'}, (err, account) =>
         {
            expect(account.id).to.eql('1234');
            done();
        });
    });

    //this test is going to test if an event is added to the users account.
    //first need to make a test event, then check the addAnEvent schema method.
    //do this with event ids not event objects
    it('Add an event to the events of the user', (done) => {
        var testID = 123;
        expect(account.addAnEvent).to.be.a('Function');


    })

    describe('addAnEvent()', () => {
        it('should have an addAnEvent method', () => {
            expect(account.addAnEvent).to.be.a('function');
        })

        it('should be a static method that populates account.events', () => {
            expect(event.getEventDate()).to.be.a('string');
        })
    })
    
    /*afterEach((done) => {
        Account.remove({}, () => {
            done();
        });
    });*/  //this commented out section deletes the users that were created by the tests 
});