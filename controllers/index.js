var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {});
});


router.post('/auth', function (req, res){
    //logic
    res.redirect('/home');
});

module.exports = router;