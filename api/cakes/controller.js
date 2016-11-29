var Cake = require('./model.js');

exports.index = function(req, res) {
  Cake.find()
  .then((cupcakes) => res.send(cupcakes));
}

exports.show = function(req, res) {
  Cake.findById(req.params.id)
  .then((cupcakes) => res.send(cupcakes))
  .catch((err) => res.send(404));
}

exports.create = function(req, res) {
  var cake = new Cake();

  cake.cake = req.body.cake;
  cake.icing = req.body.icing;
  cake.image = req.body.image;
  cake.toppings = req.body.toppings;

  cake.save()
  .then(function(cake) {
    res.send(cake);
  }).catch(function(err) {
    res.sendStatus(422)
    res.send(err);
  });
}
