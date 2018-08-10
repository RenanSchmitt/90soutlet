var express = require('express');
var router = express.Router();
const products = require('./../src/mock/db');


router.get('/', function(req, res, next) {
  // res.render('products', { title: 'Express' , id: "" });
  
  let nome;
  let imagem;
  let desc;
  let prec;
  let slug;
  let tam;

  for (const key in products) {
    const prod = products[key];

    for (const index in prod) {
          
        nome = prod.name;
        imagem = prod.image;
        desc = prod.descricao;
        prec = prod.valor;
        slug = prod.slug;
        tam = prod.tamanho;   
    }
  }
  console.log(products);
  res.render('products', { prod_list: products });

});

module.exports = router;
