var mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
  item: {
    cake: {
      type: String,
      // required: true
    },
    icing: {
      type: String,
      // required: true
    },
    image: {
      type: String,
      // required: true
    },
    toppings: {
      type: Array
    },
  },
  price: {
    type: Number,
    default: "1.99"
  },
  quanity: {
    type: Number,
    default: 1
  },
});

module.exports = mongoose.model('CartItem', CartSchema);
