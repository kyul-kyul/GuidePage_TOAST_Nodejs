var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Guide Home' });
  
});

router.get('/:part', function(req, res, next) {
  var part = req.params.part;

  res.render('index', { title: part });
  
});


router.get('/:part/:service', function(req, res, next) {
  var part = req.params.part;
  var service = req.params.service;

  res.render('index', { title: service });
  
});


router.get('/:part/:service/:content', function(req, res, next) {
  var part = req.params.part;
  var service = req.params.service;
  var content  = req.params.content;

  res.render('index', { title: content });
  
});

module.exports = router;
