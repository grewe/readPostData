var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* the URI /readNameAndRespond */

router.get('/readNameAndRespond', function(req, res, next) {
    res.send("hello");
});
router.post('/readNameAndRespond', function(req, res, next) {
    res.send("hello");
});

module.exports = router;
