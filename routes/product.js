var express = require('express');
var router = express.Router();
var object = require('../modules/objectsAndTypes');
/*Producto GET*/

router.get('/:id', (req, res, next) => {
  object.get('Product', req.params.id, 1)
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

/* Producto - Post */
router.post('/save', (req, res, next) => {
  object.save([
    'nombre',
    'description',
    'category'
  ], req.query, 'Product')
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});


/* Producto - PUT */


router.put('/save/:id', (req, res, next) => {
  let values = req.query;
  values.id = req.params.id;
  object.update([
    'nombre',
    'description',
    'category'
  ], values, 'Product')  
  .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
}); 

/* Producto Delete */
router.delete('/delete/:id', (req, res, next) => {
  object.delete('Product', req.params.id)
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

module.exports = router;
