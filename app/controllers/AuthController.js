const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

module.exports = {
  generate(email) {
    return jwt.sign({email}, authConfig.secret, { expiresIn: 86400, });
  }
};