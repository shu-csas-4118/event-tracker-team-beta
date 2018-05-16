//REQUIREMENTS
var passport = require('passport');
var Account = require('../models/account');
var express = require('express');
var router = express.Router();

//LOGIN PAGE 
router.get('/', function(req, res, next) {
  res.render('index', {title:'WELCOME TO EVENT TRACKER', user: req.user });
});

router.post('/', passport.authenticate('local'), function(req, res){
  res.redirect('/');
});


//REGISTRATION PAGE
router.get('/userRegister', function(req, res, next) {
  res.render('userRegister', {});
});

router.get('/home', function(req, res, next) {
  res.render('home', {});
});


router.post('/userRegister', function(req, res){
  Account.register(new Account({
      username : req.body.email,
      events: [],
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address}), 
    req.body.password, function(err, account) {
     if (err) {
       return res.render('userRegister', {account : account});
      }

    passport.authenticate('local')(req, res, function (){
      res.redirect('/');
    });
  });
});


//LOG OUT
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/ping', function(req, res){
  res.send("pong!", 200);
});


module.exports = router;
