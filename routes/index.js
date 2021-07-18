var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var test = ['hello', 'hello', 'hello','kki'];
  res.render('index', { title: test });
});

module.exports = router;
