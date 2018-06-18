var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/data', function(req, res, next) {
    res.send('respond with data list');
});

module.exports = router;
