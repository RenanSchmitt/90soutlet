const http = require('http');
const fs = require('fs');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  var idprod = req.url;
  idprod = idprod.slice(2, 30);
  titleprod = idprod;
  idprod = "images/"+idprod+".jpg";
  res.render('viewer', { title: titleprod, id: idprod });
});

module.exports = router;