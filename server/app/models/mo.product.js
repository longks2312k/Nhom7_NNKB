var mongoose = require('mongoose');
const { Schema } = mongoose;

var productSchema = new Schema({
  product_name: String,
  description: String,
  price: Number,
  image: String,
  categ_id: Array,
});

module.exports = mongoose.model('Product', productSchema);
