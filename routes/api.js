var express = require('express');
var router = express.Router();
let converter = require('../controllers/converter')
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.query);
  res.send({
      ar: converter.converter('ar', req.query.q)
  });
});


module.exports = router;