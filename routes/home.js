var express = require('express');
var router = express.Router();

/* GET home page that displays events. */
router.get('/home', function(req, res, next) {
  res.render('home', {});
});
router.get('/ezoo', function(req, res, next) {
  res.render('ezoo', {});
});
router.get('/tedTalk', function(req, res, next) {
  res.render('tedTalk', {});
});
router.get('/johnMayer', function(req, res, next) {
  res.render('johnMayer', {});
});
router.get('/kevinHart', function(req, res, next) {
  res.render('kevinHart', {});
});

module.exports = router;
