var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DCC (DC comics)' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'DCC (DC comics)' });
});
router.get('/comic1', function(req, res, next) {
  res.render('comic1', { title: 'Express' });
});
router.get('/comic2', function(req, res, next) {
  res.render('comic2', { title: 'Express' });
});
router.get('/comic3', function(req, res, next) {
  res.render('comic3', { title: 'Express' });
});
router.get('/comic4', function(req, res, next) {
  res.render('comic4', { title: 'Express' });
});
router.get('/comic5', function(req, res, next) {
  res.render('comic5', { title: 'Express' });
});
module.exports = router;
