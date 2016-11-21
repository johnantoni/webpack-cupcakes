var Cake = require('./model.js');

exports.index = function(req, res) {
  Cake.find()
  .then((cupcakes) => res.send(cupcakes));
}

exports.create = function(req, res) {
  var cake = new Cake();

  console.log(req.body);

  cake.cake = req.body.cake;
  cake.icing = req.body.icing;
  cake.image = req.body.image;
  cake.toppings = req.body.toppings;

  cake.save()
  .then(function(cake) {
    res.send(cake);
  }).catch(function(err) {
    res.status(422);
    res.send(err);
  });
}

exports.delete = function(req, res) {
  Cake.remove(req.params.id)
  .then((cakes) => res.send(cakes))
  .catch((err) => res.send(404));
}
