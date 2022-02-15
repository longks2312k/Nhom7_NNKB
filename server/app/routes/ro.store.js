const express = require('express');
const {
  create,
  getAll,
  updateStore,
  findStoreById,
  deleteStoreById,
} = require('../controllers/Store.controller');

const router = express.Router();

router.post('/ins', create);
router.get('/findall', getAll);
router.put('/update', updateStore);
router.get('/findOne/:id', findStoreById);
router.delete('/delone/:id', deleteStoreById);

module.exports = router;
