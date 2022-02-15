const express = require('express');
const dbconfig = require('./app/config/config');
const bodyParser = require('body-parser');
const menuRoutes = require('./app/routes/ro.menu');
const storeRoutes = require('./app/routes/ro.store');
const productRoutes = require('./app/routes/ro.product');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
dbconfig();
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to NewsApp application.' });
});

app.use('/category', menuRoutes);

app.use('/store', storeRoutes);

app.use('/product', productRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});