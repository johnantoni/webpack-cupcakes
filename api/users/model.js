var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose')

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
  number: Number,
  expiremonth: Number,
  expireYear: Number,
  Address: AddressSchema
});

var userSchema = new mongoose.Schema({
  email: String,
  userId: {
    type: String,
    unique: true,
    required: true
  },
  shipping: AddressSchema,
  billing: BillingSchema,
  cart: {
   type: [mongoose.Schema.Types.ObjectId],
   ref: 'Cakes'
  }
});
userSchema.plugin(passportLocalMongoose, { usernameField: 'email'});
module.exports = mongoose.model('User', userSchema);
