const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require('../app/models/User');
const Color = require('../app/models/Color');

const connection = new Sequelize(dbConfig);

User.init(connection);
Color.init(connection);

module.exports = connection;