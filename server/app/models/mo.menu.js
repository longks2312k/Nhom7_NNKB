var mongoose = require('mongoose');
const { Schema } = mongoose;

var categorySchema = new Schema({
  cate_id: Number,
  name: String,
  description: String,
  branch: String,
});

module.exports = mongoose.model('Category', categorySchema);
