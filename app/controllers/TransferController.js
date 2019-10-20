const Transfer = require('../models/Transfer');
const Card = require('../models/Card');

module.exports = {
  async index(request, response, next) {
    const { user_id, card_id } = request.params;

    const card = await Card.findOne({
      where: {
        user_id: parseInt(user_id),
        id: parseInt(card_id)
      }
    });

    if(!card)
      return response.status(404).send({'msg': 'Card can not be found.'});

    const transfers = await Transfer.findAndCountAll({
      where: {
        card_id: parseInt(card_id)
      }
    });

    return response.status(200).send(transfers);
  },
  async show(request, response, next) {},
  async store(request, response, next) {
    const { user_id, card_id } = request.params;
    const { type, quantity } = request.body;

    if(type != 'deposit' && type != 'draft')
      return response.status(400).send({'msg': 'Invalid value to field type.'});

    const card = await Card.findOne({
      where: {
        user_id: parseInt(user_id),
        id: parseInt(card_id)
      }
    });

    if(!card)
      return response.status(404).send({'msg': 'Card can not be found.'});

    const transfer = await Transfer.create({
      card_id: parseInt(card_id),
      type,
      quantity
    });
    
    return response.status(200).send(transfer);
  },
  async update(request, response, next) {},
  async delete(request, response, next) {},
}