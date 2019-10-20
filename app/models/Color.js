const { Model, DataTypes } = require('sequelize');

class Color extends Model {

  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        first_color: DataTypes.STRING,
        second_color: DataTypes.STRING
      },
      {
        sequelize,
        timestamps: false
      }
    );
  }

}

module.exports = Color;