var express = require('express');
var router = new express.Router();
var cakeController = require('./controller');

router.get('/', cakeController.index);
router.post('/', cakeController.create);
router.get('/:id', cakeController.show);
router.delete('/:id', cakeController.delete);

var orderController = require('../orders/controller');

router.get('/orders', orderController.index);
router.get('/orders/:id', orderController.show);

module.exports = router;
