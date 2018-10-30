var express = require('express');
var router = express.Router();
var object = require('../modules/objectsAndTypes');


/*Producto GET*/

router.get('/:id', (req, res, next) => {
  object.get('Cart', req.params.id, 1)
    .then(response => {
      res.json({
        status: true,
        content: response
      });
    })
    .catch(response => {
      res.json({
        status: false,
        content: response
      });
    });
}); 

/* Producto - Post */
router.post('/save', (req, res, next) => {
  object.save([
      'id',
    ], req.query, 'Cart')
    .then(response => {
      res.json({
        status: true,
        content: response
      });
    })
    .catch(response => {
      res.json({
        status: false,
        content: response
      });
    });
});


/* Producto - PUT */


router.put('/save/:id', (req, res, next) => {
  let values = req.query;
  values.id = req.params.id;
  object.update([
      'id',
      
    ], values, 'Cart')
    .then(response => {
      res.json({
        status: true,
        content: response
      });
    })
    .catch(response => {
      res.json({
        status: false,
        content: response
      });
    });
});

/* Producto Delete */
router.delete('/delete/:id', (req, res, next) => {
  object.delete('Cart', req.params.id)
    .then(response => {
      res.json({
        status: true,
        content: response
      });
    })
    .catch(response => {
      res.json({
        status: false,
        content: response
      });
    });
});

module.exports = router;
