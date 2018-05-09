var express = require('express');
var router = express.Router();


/*GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', {title: 'Login to Event Tracker'});
});

module.exports = router;
const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();
const mongoose = require('mongoose');


router.get('/register', (req, res) => {
    res.render('register', { });
});

router.post('/register', (req, res, next) => {
    
});

module.exports = router