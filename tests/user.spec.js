'use strict'

const expect = require('chai').expect;
const mongoose = require('mongoose');
const Account = require ("../models/account");

const account = new Account();

describe('Tests for user account', () => {

    before((done) => {
        const db = mongoose.connect('mongodb://localhost/eventtrack');
        done();
    });

    after((done) => {
        mongoose.connection.close();
        done();
    });

    beforeEach( (done) => {
        var account = new Account({
            username: 'john.doe@shu.edu',
            password: 'password',
            id: 1234
        });

        account.save((error) => {
            if (error) console.log('error' + error.message);
            done();
        });
    });

    it('Find a user by their username', (done) => {
        Account.findOne({ username: 'john.doe@shu.edu' }, (err, account) =>{
            expect(account.username).to.eql('john.doe@shu.edu');
            done();
        });
    });

    it('should have a password that is a String', () => {
        expect(account.password).to.be.a('String');
    });

    it('Find a user by their ID', (done) => {
        Account.findOne({ id: '1234'}, (err, account) => {
            expect(account.id).to.eql('1234');
            done();
        });
    });

    describe('"getRegisteredEvents"', () => {
        it ('should have a getRegisteredEvents', () => {
            expect(account.getRegisteredEvents).to.be.a('function');
        });

        it('should return an array of events that the user is registered for', () => {
            expect(account.getRegisteredEvents()).to.be.an('array');
        });
    });
    
    /*afterEach((done) => {
        Account.remove({}, () => {
            done();
        });
    });*/  //this commented out section deletes the users that were created by the tests 
});