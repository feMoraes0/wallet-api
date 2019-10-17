const { Model, DataTypes } = require('sequelize');

class User extends Model {
  
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
      },
      {
        defaultScope: {
          attributes: { exclude: ['password'] },
        },
        sequelize
      }
    )
  }

}

module.exports = User;