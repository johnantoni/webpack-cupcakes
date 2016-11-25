var express = require('express');
var router = new express.Router();

var orderController = require('../orders/controller');

router.get('/orders', orderController.index);
router.get('/orders/:id', orderController.show);

module.exports = router;
