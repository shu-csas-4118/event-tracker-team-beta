'use strict'

const expect = require('chai').expect;
const mongoose = require('mongoose');
const Account = require ("../models/account");

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
            password: 'password'
        });

        account.save((error) => {
            if (error) console.log('error' + error.message);
            done();
        });
    });

    it('Find a user by their username', (done) => {
        Account.fineOne({ username: 'john.doe@shu.edu' }, (err, account) =>{
            expect(account.username).to.eql('john.doe@shu.edu');
            done();
        });
    });

    /*afterEach((done) => {
        Account.remove({}, () => {
            done();
        });
    });*/  //this commented out section deletes the users that were created by the tests 
});