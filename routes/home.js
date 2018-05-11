var express = require('express');
var router = express.Router();

/* GET home page that displays events. */
router.get('/home', function(req, res, next) {
  res.render('home', {});
});

module.exports = router;
