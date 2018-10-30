var express = require('express');
var router = express.Router();
var object = require('../modules/objectsAndTypes');


/*Category GET*/

router.get('/:id', (req, res, next) => {
  object.get('Category', req.params.id, 1)
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

/* Category - Post */
router.post('/save', (req, res, next) => {
  object.save([
      'nombre',
      'description'
    ], req.query, 'Category')
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


/* Category - PUT */


router.put('/save/:id', (req, res, next) => {
  let values = req.query;
  values.id = req.params.id;
  object.update([
      'nombre',
      'description'
    ], values, 'Category')
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

/* Category Delete */
router.delete('/delete/:id', (req, res, next) => {
  object.delete('Category', req.params.id)
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

/*Category / Productos */

router.get('/products/:id', (req, res, next) => {
  const includes = {
    id: [
      { model: models.Product, as: 'Products' }
    ]
  };
  object.get('Category', req.params.id, 1)
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
