var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send("POST-ALL");
});

router.get('/:_id', function (req, res) {
    res.send("GET");
});


router.post('/', function (req, res) {
    res.send("POST");
});

router.put('/', function (req, res) {
    res.send("PUT");
});

router.delete('/:_id', function (req, res) {
    res.send("DELETE");
});

module.exports = router;