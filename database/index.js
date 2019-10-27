const Sequelize = require("sequelize");
const dbConfig = require('../config/database');
const User = require('../app/models/User');
const Color = require('../app/models/Color');
const Card = require('../app/models/Card');
const Transfer = require('../app/models/Transfer');

const connection = new Sequelize(
  dbConfig
);

User.init(connection);
Color.init(connection);
Card.init(connection);
Transfer.init(connection);

Card.associate(connection.models);
Transfer.associate(connection.models);

module.exports = connection;