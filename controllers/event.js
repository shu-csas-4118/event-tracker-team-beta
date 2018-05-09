var express = require('express');
var router = express.Router();

/*GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', {title: 'Register for an event'});
});

module.exports = router;
const express = require('express');
const passport = require('passport');
const Account = require('../models/event');
const router = express.Router();

router.get('/eventRegister', (req, res) => {
    res.render('eventRegister', { });
});

router.post('/eventRegister', (req, res, next) => {

});

module.exports = router