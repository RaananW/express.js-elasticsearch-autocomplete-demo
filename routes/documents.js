var express = require('express');
var router = express.Router();

var elastic = require('../elasticsearch');

/* GET suggestions */
router.get('/suggest/:input', function (req, res, next) {
  elastic.getSuggestions(req.params.input).then(function (result) { res.json(result) });
});

/* POST document to be indexed */
router.post('/', function (req, res, next) {
  elastic.addDocument(req.body).then(function (result) { res.json(result) });
});

module.exports = router;