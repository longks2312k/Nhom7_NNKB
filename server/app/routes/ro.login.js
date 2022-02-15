const express = require('express');
const {
  create,
  getAll,
  updateLogin,
  findLoginById,
  deleteLoginById,
} = require('../controllers/login.controller');

const router = express.Router();

router.post('/ins', create);
router.get('/findall', getAll);
router.put('/update', updateLogin);
router.get('/findOne/:id', findLoginById);
router.delete('/delone/:id', deleteLoginById);

module.exports = router;
