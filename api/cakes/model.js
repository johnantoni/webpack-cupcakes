var mongoose = require('mongoose');

var CakeSchema = new mongoose.Schema({
  cake: {
    type: String,
    required: true
  },
  icing: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  toppings: {
    type: Array,
  },
});

module.exports = mongoose.model('Cake', CakeSchema);
