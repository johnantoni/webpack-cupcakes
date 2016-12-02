var mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
  item: {
    id: {
      type: String,
      // required: true
    },
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
    }
  },
  price: {
    type: Number,
    default: "1.99"
  },
  quantity: {
    type: Number,
    default: 1
  },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

CartSchema.virtual('total').get(function() {
  return this.price * this.quantity;
})

module.exports = mongoose.model('CartItem', CartSchema);
