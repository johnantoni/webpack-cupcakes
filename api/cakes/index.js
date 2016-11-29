var express = require('express');
var router = new express.Router();
var cakeController = require('./controller');

router.get('/', cakeController.index);
router.post('/', cakeController.create);
router.get('/:id', cakeController.show);
module.exports = router;
