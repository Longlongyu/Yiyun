var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "艺云网", page: 'index', nav_style: 'nav-style-one'});
});

module.exports = router;
