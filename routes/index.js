var express = require('express');
var router = express.Router();
/* GET LOGIN page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WELCOME TO EVENT TRACKER' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {});

});

router.get('/userRegister', function(req, res, next) {
  res.render('home', {});
});


module.exports = router;
