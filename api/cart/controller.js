var CartItem = require('./model.js');

exports.index = function(req, res) {
  CartItem.find()
  .then((cupcakes) => res.send(cupcakes));
}

exports.create = function(req, res) {
  var newItem = new CartItem();

  // console.log (req.body);

  newItem.item.cake = req.body.cake,
  newItem.item.icing = req.body.icing,
  newItem.item.image = req.body.image,
  newItem.item.toppings = req.body.toppings

  // console.log (newItem);

  newItem.save()
  .then(function(newItem) {
    res.send(newItem);
  }).catch(function(err) {
    res.sendStatus(422)
    res.send(err);
  });
}

exports.update = function(req, res) {
  console.log(req.params.id);
  CartItem.findById(req.params.id)
  .then((cart) => {
      console.log(cart);
    cart.quantity = parseInt(req.body.quantity);

    cart.save()
    .then(function(cart) {
      res.send(cart);
    })
    .catch(function(err) {
      res.status(422);
      res.send(err);
    });
  })
  .catch(() => res.send(404))
}


exports.delete = function(req, res) {
  CartItem.findById(req.params.id).remove()
  .then(() => res.sendStatus(200))
  .catch((err) => res.send(404));
}
