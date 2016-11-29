var Cart = require('./model.js');

exports.index = function(req, res) {
  CartItem.find()
  .then((cupcakes) => res.send(cupcakes));
}

exports.create = function(req, res) {
  var item = new CartItem();

  console.log (item);

  // CartItem.item = {
  //   cake = req.body.cake,
  //   icing = req.body.icing,
  //   image = req.body.image,
  //   toppings = req.body.toppings
  // }

  // CartItem.save()
  // .then(function(item) {
  //   res.send(item);
  // }).catch(function(err) {
  //   res.sendStatus(422)
  //   res.send(err);
  // });
}

exports.delete = function(req, res) {
  CartItem.findById(req.params.id).remove()
  .then(() => res.sendStatus(200))
  .catch((err) => res.send(404));
}
