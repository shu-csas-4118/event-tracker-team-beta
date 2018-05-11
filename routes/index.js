var express = require('express');
var router = express.Router();
/* GET LOGIN page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WELCOME TO EVENT TRACKER' });
});

router.get('/index', function(req, res, next) {
  res.render('index', {});
});

router.get('/userRegister', function(req, res, next) {
  res.render('userRegister', {});
});


module.exports = router;
