//REQUIREMENTS
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require("mongodb");
var http = require('http');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var session = require('express-session');

//ROUTES
var index = require('./routes/index');
var event = require('./routes/event');
var home = require('./routes/home');

//MAIN CONFIGURATION
var app = express();

app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.methodOverride());
//app.use(session());
app.use(passport.initialize());
app.use(passport.session());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/event', event);
app.use('/home', home);

//ERROR HANDLER
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




//PASSPORT CONFIGURATION
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

//MONGOOSE
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/event-tracker");

/*//const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');

// Connection URL
//const url = 'mongodb://localhost:27017';

// Database Name
//const dbName = 'eventTrackTest';



var User = mongoose.model("User", userSchema);



const insertUser = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Insert some documents
  collection.insertOne(
    {name : "Zane", password : "zane"}
  , function(err, result) {
      assert.equal(err, null);
      console.log("Added user");
    callback(result);
  });
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/eventTracker');

// Use connect method to connect to the server
mongodb.MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  var server = app.listen(app.get('port'), function () {
    console.log("App now running on port" + app.get('port'));
  });
});*/


var server = app.listen(app.get('port'), function () {
  console.log("App now running on port" + app.get('port'));
});

/*server.setTimeout(0, function(){
  console.log('Server timed out.');
})*/

module.exports = app;
