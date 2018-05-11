var express = require('express');
var router = express.Router();
const Event = require("../models/event");
const mongoose = require('mongoose');

/*  */
router.get('/event', function(req, res, next) {
  res.render('event', {});
});

router.get('/eventRegister', function(req, res, next) {
  res.render('eventRegister', {});
});


module.exports = router;
