const Store = require('../models/mo.store');

// Create and Save a new Store
const create = async (req, res) => {
  // Validate request
  console.log(123);
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  const { name, phone, address, opening_time, closing_time, images } = req.body;
  console.log(req.body);
  //   return;
  // Create a Store
  const storeCreated = new Store({
    name,
    phone,
    address,
    opening_time,
    closing_time,
    images,
  });
  try {
    await storeCreated.save();
  } catch (error) {
    throw new Error('Error create store failed');
  }
  res.status(201).json(storeCreated);
  // Save Store in the database
};

const getAll = async (req, res) => {
  let storeData = [];
  try {
    storeData = await Store.find({});
  } catch (error) {
    throw new Error('Error getAll store failed');
  }

  res.status(200).json(storeData);
};

const updateStore = async (req, res) => {
  const { id, name, phone, address, opening_time, closing_time, images } = req.body;

  const store = await Store.findById(id);

  if (store) {
    store.name = name;
    store.phone = phone;
    store.address = address;
    store.opening_time = opening_time;
    store.closing_time = closing_time;
    store.images = images;
    const storeUpdated = await store.save();
    res.status(200).json(storeUpdated);
  } else {
    res.status(400);
    throw new Error('Update failed');
  }
};

const findStoreById = async (req, res) => {
  const { id } = req.params;

  try {
    const store = await Store.findById(id);
    res.status(200).json(store);
  } catch (error) {
    res.status(400);
    throw new Error('Error failed');
  }
};

const deleteStoreById = async (req, res) => {
  const { id } = req.params;

  try {
    const store = await Store.findById(id);
    if (store) {
      await store.remove();
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

module.exports = { create, getAll, updateStore, findStoreById, deleteStoreById };
