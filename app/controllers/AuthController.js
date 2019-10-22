const jwt = require('jsonwebtoken');

module.exports = {
  generate(email) {
    return jwt.sign({email}, process.env.SECRET_KEY, { expiresIn: 86400, });
  }
};