var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require("sequelize");

const Aventurero = require("../models").aventurero;
const Raza = require("../models").raza;
const Clase = require("../models").clase;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/aventureros', function(req, res, next) {
  
    Aventurero.findAll({  
    attributes: { exclude: ["createdAt","updatedAt"] }  
  })  
    .then(resultado => {  
        res.json(resultado) 
    })  
    .catch((error) => res.status(400).send(error));
});

router.get('/razas', function(req, res, next) {
  
    Raza.findAll({  
    attributes: { exclude: ["updatedAt"] }  
  })  
    .then(resultado => {  
        res.json(resultado) 
    })  
    .catch((error) => res.status(400).send(error));
});

router.get('/clases', function(req, res, next) {
    Clase.findAll({  
    attributes: { exclude: ["updatedAt"] }  
  })  
    .then(resultado => {  
        res.json(resultado) 
    })  
    .catch((error) => res.status(400).send(error));
});

router.get("/clases/:id", function (req, res, next) {
  Clase.findOne({ where: { id: req.params.id } })
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => res.status(400).send(error));
});

/*router.get("/productos/:id", function (req, res, next) {
  Producto.findOne({ where: { id: req.params.id } })
    .then((productos) => {
      res.json(productos);
    })
    .catch((error) => res.status(400).send(error));
});*/


module.exports = router;