const express = require('express');
const {
  create,
  getAll,
  updateMenu,
  findMenuById,
  deleteMenuById,
} = require('../controllers/menu.controller');

const router = express.Router();

router.post('/ins', create);
router.get('/findall', getAll);
router.put('/update', updateMenu);
router.get('/findOne/:id', findMenuById);
router.delete('/delone/:id', deleteMenuById);

module.exports = router;
