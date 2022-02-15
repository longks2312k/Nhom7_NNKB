var mongoose = require('mongoose');
const { Schema } = mongoose;

var customerSchema = new Schema({
  name: Number,
  address: String,
  phone: String,
  date: String,
  member: String,
});

module.exports = mongoose.model('Customer', customerSchema);
