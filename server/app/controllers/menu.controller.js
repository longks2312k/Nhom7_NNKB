const Menu = require('../models/mo.menu');

// Create and Save a new Menu
const create = async (req, res) => {
  // Validate request
  console.log(123);
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  const { cate_id, name, description, branch, image } = req.body;
  console.log(req.body);
  //   return;
  // Create a Menu
  const menuCreated = new Menu({
    cate_id,
    name,
    description,
    branch,
    image,
  });
  try {
    await menuCreated.save();
  } catch (error) {
    throw new Error('Error create menu failed');
  }
  res.status(201).json(menuCreated);
  // Save Menu in the database
};

const getAll = async (req, res) => {
  let menuData = [];
  try {
    menuData = await Menu.find({});
  } catch (error) {
    throw new Error('Error getAll menu failed');
  }

  res.status(200).json(menuData);
};

const updateMenu = async (req, res) => {
  const { id, cate_id, name, description, branch, image } = req.body;

  const menu = await Menu.findById(id);

  if (menu) {
    menu.cate_id = cate_id,
    menu.name = name;
    menu.description = description;
    menu.branch = branch;
    menu.image = image;
    const menuUpdated = await menu.save();
    res.status(200).json(menuUpdated);
  } else {
    res.status(400);
    throw new Error('Update failed');
  }
};

const findMenuById = async (req, res) => {
  const { id } = req.params;

  try {
    const menu = await Menu.findById(id);
    res.status(200).json(menu);
  } catch (error) {
    res.status(400);
    throw new Error('Error failed');
  }
};

const deleteMenuById = async (req, res) => {
  const { id } = req.params;

  try {
    const menu = await Menu.findById(id);
    if (menu) {
      await menu.remove();
      res.json({ message: 'Deleted' });
    } else {
      res.status(400);
      throw new Error('Delete failed');
    }
  } catch (error) {
    res.status(400);
    throw new Error('Error failed');
  }
};

module.exports = { create, getAll, updateMenu, findMenuById, deleteMenuById };
