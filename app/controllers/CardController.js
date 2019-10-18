const Card = require('../models/Card');

module.exports = {
  
  async index(request, response, next) {
    return response.status(200).send({'msg': 'success'});
  },

  async show(request, response, next) {
    return response.status(200).send({'msg': 'success'});
  },
  
  async store(request, response, next) {
    return response.status(200).send({'msg': 'success'});
  },
  
  async update(request, response, next) {
    return response.status(200).send({'msg': 'success'});
  },
  
  async delete(request, response, next) {
    return response.status(200).send({'msg': 'success'});
  },

};