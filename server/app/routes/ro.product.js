const express = require('express');
const {
  create,
  getAll,
  updateProduct,
  findProductById,
  deleteProductById,
} = require('../controllers/product.controller');

const router = express.Router();

router.post('/ins', create);
router.get('/findall', getAll);
router.put('/update', updateProduct);
router.get('/findOne/:id', findProductById);
router.delete('/delone/:id', deleteProductById);

module.exports = router;
