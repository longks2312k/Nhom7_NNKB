const Customer = require('../models/mo.customer');

// Create and Save a new Customer
const create = async (req, res) => {
  // Validate request
  console.log(123);
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  const { name, address, phone, date, member, } = req.body;
  console.log(req.body);
  //   return;
  // Create a Customer
  const customerCreated = new Customer({
    name,
    address,
    phone,
    date,
    member,
  });
  try {
    await customerCreated.save();
  } catch (error) {
    throw new Error('Error create customer failed');
  }
  res.status(201).json(customerCreated);
  // Save Customer in the database
};

const getAll = async (req, res) => {
  let customerData = [];
  try {
    customerData = await Customer.find({});
  } catch (error) {
    throw new Error('Error getAll customer failed');
  }

  res.status(200).json(customerData);
};

const updateCustomer = async (req, res) => {
  const { id, name, address, phone, date, member, } = req.body;

  const customer = await Customer.findById(id);

  if (customer) {
    customer.name = name,
    customer.address = address;
    customer.phone = phone;
    customer.date = date;
    customer.member = member;
    const customerUpdated = await customer.save();
    res.status(200).json(customerUpdated);
  } else {
    res.status(400);
    throw new Error('Update failed');
  }
};

const findCustomerById = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findById(id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400);
    throw new Error('Error failed');
  }
};

const deleteCustomerById = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findById(id);
    if (customer) {
      await customer.remove();
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

module.exports = { create, getAll, updateCustomer, findCustomerById, deleteCustomerById };
