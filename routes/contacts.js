const express = require('express');
const routes = express.Router();
const Contacts = require("../models/contacts");

routes.get('/api/contacts', async (req, res) => {
  const contacts = await Contacts.find();
  res.json(contacts);
})

module.exports = routes;
