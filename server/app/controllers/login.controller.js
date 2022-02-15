const Login = require('../models/mo.login');

// Create and Save a new Login
const create = async (req, res) => {
  // Validate request
  console.log(123);
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  const { username, password, email } = req.body;
  console.log(req.body);
  //   return;
  // Create a Login
  const loginCreated = new Login({
    username,
    password,
    email,
  });
  try {
    await loginCreated.save();
  } catch (error) {
    throw new Error('Error create login failed');
  }
  res.status(201).json(loginCreated);
  // Save Login in the database
};

const getAll = async (req, res) => {
  let loginData = [];
  try {
    loginData = await Login.find({});
  } catch (error) {
    throw new Error('Error getAll login failed');
  }

  res.status(200).json(loginData);
};

const updateLogin = async (req, res) => {
  const { id, username, password, email } = req.body;

  const login = await Login.findById(id);

  if (login) {
    login.username = username,
    login.password = password;
    login.description = email;
    const loginUpdated = await login.save();
    res.status(200).json(loginUpdated);
  } else {
    res.status(400);
    throw new Error('Update failed');
  }
};

const findLoginById = async (req, res) => {
  const { id } = req.params;

  try {
    const login = await Login.findById(id);
    res.status(200).json(login);
  } catch (error) {
    res.status(400);
    throw new Error('Error failed');
  }
};

const deleteLoginById = async (req, res) => {
  const { id } = req.params;

  try {
    const login = await Login.findById(id);
    if (login) {
      await login.remove();
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

module.exports = { create, getAll, updateLogin, findLoginById, deleteLoginById };
