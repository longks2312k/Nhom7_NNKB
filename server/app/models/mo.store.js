var mongoose = require('mongoose');
const { Schema } = mongoose;

var storeSchema = new Schema({
  name: String,
  phone: Number,
  address: String,
  opening_time: String,
  closing_time: String,
  images: String,
});

module.exports = mongoose.model('Store', storeSchema);
