const http = require('http');
const fs = require('fs');
var express = require('express');
var router = express.Router();

var products = [];

products = [   
  {   
    "name" : "Chápeu",
    "slug" : "chapeu",
    "image" : "images/chapeu.jpg",
    "descricao" : "É um chapéu muito bonito.",
    "valor" : 150.00,   
    "tamanho" : "25",
  },
  {    
    "name" : "Flanela",
    "slug" : "flanela",    
    "image" : "images/chapeu.jpg",
    "descricao" : "É um chapéu muito bonito.",
    "valor" : 150.00,
    "tamanho" : "",   
  }
];


router.get('/', function(req, res, next) {  
  var idprod = req.url;
  idprod = idprod.slice(2, 30);
  for (const key in products) {
    let prod = products[key];    
    console.log(key);

    for (const index in prod) {
      console.log(`${index} : ${prod[index]}`);
      if(idprod === prod.slug){
        var nome = prod.name;
        var imagem = prod.image;
        var desc = prod.descricao;
        var prec = prod.valor;
        var slug = prod.slug;
      }
    }
  }

  console.log(nome,imagem,desc,prec);

  res.render('viewer', { title: nome, image: imagem, description: desc, price: prec});
});

module.exports = router;