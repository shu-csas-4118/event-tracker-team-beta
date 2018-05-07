var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*account: A mongoose schema representing one user of the application.
    -String username: the account's username; also the account's email.
    -String password: the account's password.
    -Number id:  the id of the account.
    -Array events: holds all of the events this account is registered for.
    -String firstName: the first name of the owner of the account.
    -String lastName: the last name of the owner of the account.
    -String address: the address of the owner of the account.*/
var accountSchema = new Schema({
    username: String,
    password: String,
    id: Number,
    events: Array, //populated with event ids
    firstName: String,
    lastname: String,
    address: String
});

/*login(String, String, Callback): This method takes in two Strings representing
                                    a username and password and:
                                        1. sees if the username exists.
                                        2. sees if the password matches the username.
                                        3. returns the account if the password matches the 
                                            account associated with that username.*/
accountSchema.methods.login = function(nme, pwd, callback)
{
    const logger = this.model('users').findOne({ username: nme }, callback);
    if(logger)
    {
        if(logger.password === pwd)
        {
            return logger;
        }
        else
        {
            return 'Password or username invalid.';
        }
    }
    else{
        return 'Password or username invalid.'
    }
}

/*addAnEvent(eventIDs): This method pushes the given event ID onto the events array for this account.*/
accountSchema.statics.addAnEvent = function(eventID)
{
    this.events.push(eventID);
};

module.exports = mongoose.model('users', accountSchema);