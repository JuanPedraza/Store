var express = require('express');
var router = express.Router();
var object = require('../modules/objectsAndTypes');


/*User GET*/

router.get('/:id', (req, res, next) => {
  object.get('User', req.params.id, 1)
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

/* User - Register */
router.post('/save', (req, res, next) => {
  object.save([
    'email',
    'password',
    'firstName',
    'lastName',
    'birthday',
    'Datos'

  ], req.query, 'User')
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});


/* User - Update */


router.put('/save/:id', (req, res, next) => {
  let values = req.query;
  values.id = req.params.id;
  object.update([
    'email',
    'password',
    'firstName',
    'lastName',
    'birthday',
    'Datos'
  ], values, 'User')
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

/* User Delete */
router.delete('/delete/:id', (req, res, next) => {
  object.delete('User', req.params.id)
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

module.exports = router;
