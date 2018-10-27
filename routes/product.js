var express = require('express');
var router = express.Router();

/* Producto - Post */
router.post('/save', (req, res, next) => {

  const nuevoProducto = {
    nombre: req.query.nombre,
    description: req.query.descripcion,
  }

  models.Product.create(nuevoProducto)
    .then(elNuevoProducto => {
      res.json(elNuevoProducto);
    });

});


/* Producto - PUT */


router.put('/save/:id', (req, res, next) => {

  models.Product.findOne({
    where: {id: req.params.id}
  }).then(product => {
    product.nombre = req.query.nombre;
    product.description = req.query.descripcion;

    product.save()
      .then(p => {
        res.json(p);
      })

  });

 
});



module.exports = router;
