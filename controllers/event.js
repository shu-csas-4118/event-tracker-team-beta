const express = require('express');
const Event = require("../models/event");
const router = express.Router();

router.get('/addEvent', function(req,res){
    res.render('addEvent', {});
});

router.post('/addEvent', function (req, res, next){
    const evt = new Event({
        date: String,
        time: String,
        Name: String,
        description: String,
        id: Number,
        eventRegistrants: Array
    });

    evt.save(function(error){
        if (error){
            console.log(error.message);
        }
    });

    res.redirect('events');
});

module.exports = router;
