var express = require('express');
var router = express.Router();

/*GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', {});
});

module.exports = router;
const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();



module.exports = router