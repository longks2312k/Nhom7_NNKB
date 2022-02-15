var mongoose = require('mongoose');
const { Schema } = mongoose;

var loginSchema = new Schema({
  username: String,
  password: String,
  email: String,
});

module.exports = mongoose.model('Login', loginSchema);
