const User = require('../models/User');
const sha256 = require('sha256');

module.exports = {

  async index(request, response, next) {
    const users = await User.findAndCountAll();

    return response.json(users);
  },

  async show(request, response, next) {
    const { id } = request.params;

    if( !Number.isInteger(parseInt(id)) ) {
      return response.status(400).send({"msg": "ID parameter need to be an integer."});
    }

    const user = await User.findByPk(id);
    if( user !== null ) {
      return response.status(200).send(user);
    }

    return response.status(404).send({"msg": "User not found"});
  },

  async store(request, response, next) {
    const { name, email, password } = request.body;
    
    if(name == null || email == null || password == null) {
      return response.status(400).send({"msg": "name, email and password are required."});
    }

    if(name == "" || email == "" || password == "") {
      return response.status(400).send({"msg": "empty field are not accepted"});
    }

    const user = await User.create({
      name: name,
      email: email,
      password: sha256(password)
    });

    user.password = "secret";

    return response.status(200).send(user);
  },

  async update(request, response) {
    const { id } = request.params;
    const { name, email } = request.body;

    if( !Number.isInteger(parseInt(id)) ) {
      return response.status(400).send({"msg": "ID parameter need to be an integer"});
    }

    if( name == null || email == null ) {
      return response.status(400).send({"msg": "name and email are required."});
    }

    if( name == "" || email == "" ) {
      return response.status(400).send({"msg": "empty field are not accepted"});
    }

    const user = await User.findByPk(id);

    if( user !== null ) {
      const updated = await User.update(
        { name, email },
        { where: { id: id } }
      );
      
      if(updated == 1) {
        user.name = name;
        user.email = email;

        return response.status(200).send(user);
      }

      return response.status(500).send({"msg": "Internal server error"});
    }

    return response.status(404).send({"msg": "User not found"});
  },

  async delete(request, response, next) {
    const { id } = request.params;
    
    if( !Number.isInteger(parseInt(id)) ) {
      return response.status(400).send({"msg": "ID parameter need to be an integer."});
    }
    
    const user = await User.findByPk(id);
    
    if( user !== null ) {
      User.destroy({ where: { id: id } });
      return response.status(200).send({"msg": "User removed with success"});
    }
    
    return response.status(404).send({"msg": "User not found"});
  }
};