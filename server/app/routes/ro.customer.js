const express = require('express');
const {
  create,
  getAll,
  updateCustomer,
  findCustomerById,
  deleteCustomerById,
} = require('../controllers/customer.controller');

const router = express.Router();

router.post('/ins', create);
router.get('/findall', getAll);
router.put('/update', updateCustomer);
router.get('/findOne/:id', findCustomerById);
router.delete('/delone/:id', deleteCustomerById);

module.exports = router;