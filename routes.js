const express = require('express');

const routes = express.Router();

routes.get('/', (request, response, next) => {
  console.log(request.body);
  response
    .status(200)
    .send({
      'success': true
    });
});

module.exports = routes;