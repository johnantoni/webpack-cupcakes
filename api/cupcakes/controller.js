var Cupcake = require('./model.js');

exports.index = function(req, res) {
  Cupcakes.find()
  .then((cupcakes) => res.send(cupcakes));
}

exports.create = function(req, res) {
  Cupcakes.find()
  .then((cupcakes) => res.send(cupcakes));
}
