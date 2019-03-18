const http = require('http');
const fs = require('fs');
const express = require('express');
const router = express.Router();
const mockserver = require('mockserver');
const axios = require('axios');
const products = require('./../src/mock/db');

// http.createServer(mockserver('test/mocks')).listen(9001);

router.get('/', function (req, res, next) {
  let idprod = req.url;
  let nome;
  let imagem;
  let desc;
  let prec;
  let slug;
  let tam;
  
  idprod = idprod.slice(2, 30);

  for (const key in products) {
    const prod = products[key];

    for (const index in prod) {
      if (idprod === prod.slug) {    
        nome = prod.name;
        imagem = prod.image;
        desc = prod.descricao;
        prec = prod.valor;
        slug = prod.slug;
        tam = prod.tamanho;
      }      
    }
  }
  res.render('viewer', { title: nome, image: imagem, description: desc, price: prec, size: tam });
});

module.exports = router;