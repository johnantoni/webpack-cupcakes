var Cake = require('./model.js');

exports.index = function(req, res) {
  Cake.find()
  .then((cupcakes) => res.send(cupcakes));
}

exports.create = function(req, res) {
  Cake.find()
  .then((cupcakes) => res.send(cupcakes));
}
