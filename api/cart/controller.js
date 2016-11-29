var CartItem = require('./model.js');

exports.index = function(req, res) {
  CartItem.find()
  .then((cupcakes) => res.send(cupcakes));
}

exports.create = function(req, res) {
  var item = new CartItem();

  console.log (item);

  CartItem.item = {};
  CartItem.item.cake = req.body.cake;
  CartItem.item.icing = req.body.icing;
  CartItem.item.image = req.body.image;
  CartItem.item.toppings = req.body.toppings

  CartItem.save()
  .then(function(item) {
    res.send(item);
  }).catch(function(err) {
    res.sendStatus(422)
    res.send(err);
  });
}

exports.delete = function(req, res) {
  CartItem.findById(req.params.id).remove()
  .then(() => res.sendStatus(200))
  .catch((err) => res.send(404));
}
