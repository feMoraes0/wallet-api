const express = require('express');

const UserController = require('../controllers/UserController');
const CardController = require('../controllers/CardController');
const TransferController = require('../controllers/TransferController');

const AuthMiddleware = require('../middleware/auth');

const routes = express.Router();

/* EXTERNAL ROUTES - WITHOUT TOKEN */
routes.get('/login', UserController.login);
routes.post('/register', UserController.store);

/* USERS */
routes.get('/users', AuthMiddleware.verify, UserController.index);

routes.get('/user/:id', AuthMiddleware.verify, UserController.show);
routes.delete('/user/:id', AuthMiddleware.verify, UserController.delete);
routes.put('/user/:id', AuthMiddleware.verify, UserController.update);

/* CARDS */
routes.get('/user/:user_id/cards', AuthMiddleware.verify, CardController.index);

routes.get('/user/:user_id/card/:card_id', AuthMiddleware.verify, CardController.show);
routes.post('/user/:user_id/card', AuthMiddleware.verify, CardController.store);
routes.delete('/user/:user_id/card/:card_id', AuthMiddleware.verify, CardController.delete);
routes.put('/user/:user_id/card/:card_id', AuthMiddleware.verify, CardController.update);

/* TRANSFER */
routes.get('/user/:user_id/card/:card_id/transfers', AuthMiddleware.verify, TransferController.index);

routes.get('/user/:user_id/card/:card_id/transfer/:transfer_id', AuthMiddleware.verify, TransferController.show);
routes.post('/user/:user_id/card/:card_id/transfer', AuthMiddleware.verify, TransferController.store);
routes.delete('/user/:user_id/card/:card_id/transfer/:transfer_id', AuthMiddleware.verify, TransferController.delete);
routes.put('/user/:user_id/card/:card_id/transfer/:transfer_id', AuthMiddleware.verify, TransferController.update);

module.exports = routes;