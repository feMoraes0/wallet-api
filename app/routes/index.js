const express = require('express');

const UserController = require('../controllers/UserController');
const CardController = require('../controllers/CardController');

const routes = express.Router();

/* USERS */
routes.get('/users', UserController.index);

routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.store);
routes.delete('/user/:id', UserController.delete);
routes.put('/user/:id', UserController.update);

/* CARDS */
routes.get('/user/:user_id/cards', CardController.index);

routes.get('/user/:user_id/card/:card_id', CardController.show);
routes.post('/user/:user_id/card', CardController.store);
routes.delete('/user/:user_id/card/:card_id', CardController.delete);
routes.put('/user/:user_id/card/:card_id', CardController.update);

module.exports = routes;