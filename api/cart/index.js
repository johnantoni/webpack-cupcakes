var express = require('express');
var router = new express.Router();
var cartController = require('./controller');

router.get('/', cartController.index);
router.post('/', cartController.create);
router.delete('/:id', cartController.delete);
router.put('/:id', cartController.update);

module.exports = router;
