const express = require('express');
const UserController = require('../controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);

routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.store);
routes.delete('/user/:id', UserController.delete);
routes.put('/user/:id', UserController.update);

module.exports = routes;