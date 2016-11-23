var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  count: {
    type: Number,
    required: true, // count must be set
    max: 1000,
    min: 10
  },
  status: {
    type: String,
    enum: ['created', 'success', 'failed'] // status must be choosen from enum
  },
  created: {
   type: Date,
   default: Date.now
  },
  price: {
    type: String,
  },
  cakes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cake',
    required: false
  }
});

module.exports = mongoose.model('Order', OrderSchema);
