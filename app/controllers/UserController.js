const User = require('../models/User');
const sha256 = require('sha256');

module.exports = {

  async index(request, response) {
    const users = await User.findAll();

    return response.json(users);
  },

  async store(request, response) {
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

  async show(request, response) {
    return false;
  },

  async update(request, response) {
    return false;
  },

  async delete(request, response) {
    return false;
  }
};