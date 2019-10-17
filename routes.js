const express = require('express');
const UserController = require('./app/controllers/UserController');

const routes = express.Router();

routes.get('/', UserController.store);

module.exports = routes;