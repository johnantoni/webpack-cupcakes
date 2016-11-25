var Order = require('./model.js');

exports.index = function(req, res) {
  console.log("22");
  Order.find()
  .then((orders) => res.send(orders));
}

exports.show = function(req, res) {
  Order.findById(req.params.id)
  .then((orders) => res.send(orders))
  .catch((err) => res.send(404));
}
