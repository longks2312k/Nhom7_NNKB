var mongoose = require('mongoose');

const url = 'mongodb+srv://admin:admin123456@cluster-nnkb.kxxle.mongodb.net/CoffeeHouseDB?retryWrites=true&w=majority';

const dbconfig = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log('Server connected ' + conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = dbconfig;
