//REQUIREMENTS
var passport = require('passport');
var Account = require('../models/account');
var express = require('express');
var router = express.Router();

/* GET LOGIN page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'WELCOME TO EVENT TRACKER', user: req.user });
});

router.post('/', passport.authenticate('local'), function(req, res){
  res.redirect('/');
});

router.get('/userRegister', function(req, res, next) {
  res.render('userRegister', {});
});

router.post('/userRegister', function(req, res){
  Account.register(new Account({username : req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.render('userRegister', {account : account});
    }

    passport.authenticate('local')(req, res, function (){
      res.redirect('/');
    });
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {});

});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/ping', function(req, res){
  res.send("pong!", 200);
});


module.exports = router;
