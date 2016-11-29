var CartItem = require('./model.js');

exports.index = function(req, res) {
  CartItem.find()
  .then((cupcakes) => res.send(cupcakes));
}

exports.create = function(req, res) {
  var item = new CartItem();

  console.log (item);

  item.item = {};
  item.item.cake = req.body.cake;
  item.item.icing = req.body.icing;
  item.item.image = req.body.image;
  item.item.toppings = req.body.toppings


    console.log (item);

  item.save()
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
