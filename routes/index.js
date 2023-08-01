var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Moving Eyes Demo', sub: "Sitio en construcción..." });
});

module.exports = router;
