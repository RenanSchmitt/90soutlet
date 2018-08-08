const http = require('http');
const fs = require('fs');
var express = require('express');
var router = express.Router();
var mockserver  =  require('mockserver');

http.createServer(mockserver('test/mocks')).listen(9001);

var products = [];

products = [ 
  {   
    "name" : "Chápeu",
    "slug" : "chapeu",
    "image" : "images/chapeu.jpg",
    "descricao" : "É um chapéu muito bonito.",
    "valor" : 150.00,   
    "tamanho" : "10",
  },
  {    
    "name" : "Flanela",
    "slug" : "flanela",    
    "image" : "images/flanela.jpg",
    "descricao" : "Flanela vermelha.",
    "valor" : 150.00,
    "tamanho" : "P",   
  },
  {    
    "name" : "Regata Misfit",
    "slug" : "regata",    
    "image" : "images/regata.jpg",
    "descricao" : "Regata em perfeitas condições.",
    "valor" : 90.00,
    "tamanho" : "G",   
  },
  {    
    "name" : "Saia Jeans",
    "slug" : "saia",    
    "image" : "images/saia.jpg",
    "descricao" : "Saia Jeans com bot]oes na parte da frente.",
    "valor" : 75.00,
    "tamanho" : "M",   
  },
  {    
    "name" : "Casaco de couro",
    "slug" : "casaco-couro",    
    "image" : "images/casaco-couro.jpg",
    "descricao" : "Ótimo casaco, esta em perfeitas condições..",
    "valor" : 260.00,
    "tamanho" : "M",   
  }
];


router.get('/', function(req, res, next) {  
  var idprod = req.url;
  idprod = idprod.slice(2, 30);
  for (const key in products) {
    let prod = products[key];    
    // console.log(key);

    for (const index in prod) {
      // console.log(`${index} : ${prod[index]}`);
      if(idprod === prod.slug){
        var nome = prod.name;
        var imagem = prod.image;
        var desc = prod.descricao;
        var prec = prod.valor;
        var slug = prod.slug;
        var tam = prod.tamanho;
      }
    }
  }

  // console.log(nome,imagem,desc,prec);

  res.render('viewer', { title: nome, image: imagem, description: desc, price: prec, size: tam});
});

module.exports = router;