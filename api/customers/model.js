var mongoose = require('mongoose');

var AddressSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  province: String,
  postcoee: String
});

var BillingSchema = new mongoose.Schema({
  cardtype: {
    type: String,
    enum: ['Visa', 'MasterCard', 'Amex']
  },
  name: String,
  number: String,
  expiremonth: Number,
  expireYear: Number,
  Address: AddressSchema
});

var CustomerSchema = new mongoose.Schema({
  email: String,
  userId: {
    type: String,
    unique: true,
    required: true
  },
  shipping: AddressSchema,
  billing: BillingSchema
});

module.exports = mongoose.model('Customer', CustomerSchema);
