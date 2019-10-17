const User = require('../models/User');
const sha256 = require('sha256');

module.exports = {

  async show(request, response, next) {
    const users = await User.findAll();

    return response.json(users);
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
    return false;
  },

  async delete(request, response) {
    let { id } = request.params;
    
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