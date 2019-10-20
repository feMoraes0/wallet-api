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

  async show(request, response, next) {
    const { user_id, card_id, transfer_id } = request.params;

    const card = await Card.findOne({
      where: {
        user_id: parseInt(user_id),
        id: parseInt(card_id)
      }
    });

    if(!card)
      return response.status(404).send({'msg': 'Card can not be found.'});
    
    const transfer = await Transfer.findByPk(transfer_id);

    if(!transfer)
      return response.status(404).send({'msg': 'Transfer can not be found.'});
    
    return response.status(200).send(transfer);
  },
  
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
  
  async update(request, response, next) {
    const { user_id, card_id, transfer_id } = request.params;
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
    
    const transfer = await Transfer.findByPk(parseInt(transfer_id));

    if(!transfer)
      return response.status(404).send({'msg': 'Trasnfer can not be found.'});
    
    const updated = await Transfer.update(
      {type, quantity},
      {where: {id: parseInt(transfer_id)}}
    );

    if(updated != 1) 
      return response.status(500).send({'msg': 'Internal server error, try again later.'});
    
    transfer.type = type;
    transfer.quantity = quantity;

    return response.status(200).send(transfer);
  },
  
  async delete(request, response, next) {
    const { user_id, card_id, transfer_id } = request.params;

    const card = await Card.findOne({
      where: {
        id: parseInt(card_id),
        user_id: parseInt(user_id)
      }
    });

    if(!card)
      return response.status(404).send({'msg': 'Card can not be found.'});

    const transfer = await Transfer.findByPk(parseInt(transfer_id));

    if(!transfer)
      return response.status(404).send({'msg': 'Trasnfer can not be found.'});
    
    const deleted = await Transfer.destroy({
      where: {
        id: parseInt(transfer_id)
      }
    });

    if(deleted != 1)
      return response.status(500).send({'msg': 'Internal server error, try again later.'});
    
    return response.status(200).send({'msg': 'Deleted with success'});
  },

};