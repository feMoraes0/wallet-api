const Card = require('../models/Card');
const User = require('../models/User');

module.exports = {
  
  async index(request, response, next) {
    return response.status(200).send({'msg': 'success'});
  },

  async show(request, response, next) {
    const {user_id, card_id} = request.params;

    const card = await Card.findOne({
      where: {
        id: parseInt(card_id),
        user_id: parseInt(user_id)
      }
    });

    return response.status(200).send(card);
  },
  
  async store(request, response, next) {
    const { user_id, color_id, label, coin, type, initial } = request.body;

    if(!user_id || !color_id || !label|| !coin || !type)
      return response.status(400).send({'msg': 'Some required fields are not sent.'});
    
    if(user_id == '' || color_id == '' || label == '' || coin == '' || type == '')
      return response.status(400).send({'msg': 'Fields can not be empty.'});
    
    const user = await User.findByPk(parseInt(user_id));

    if(!user)
      return response.status(404).send({'msg': 'User can not be found.'});

    const card = await Card.create({user_id, color_id, label, coin, type,});

    return response.status(200).send({'card': card});
  },
  
  async update(request, response, next) {
    return response.status(200).send({'msg': 'success'});
  },
  
  async delete(request, response, next) {
    return response.status(200).send({'msg': 'success'});
  },

};