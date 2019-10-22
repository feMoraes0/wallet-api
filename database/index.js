const Sequelize = require("sequelize");

const User = require('../app/models/User');
const Color = require('../app/models/Color');
const Card = require('../app/models/Card');
const Transfer = require('../app/models/Transfer');

const connection = new Sequelize(
  {
    dialect: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
      timestamps: true,
      underscored: true,
    },
  }
);

User.init(connection);
Color.init(connection);
Card.init(connection);
Transfer.init(connection);

Card.associate(connection.models);
Transfer.associate(connection.models);

module.exports = connection;