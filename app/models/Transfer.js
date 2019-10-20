const { Model, DataTypes } = require('sequelize');

class Transfer extends Model {

  static init(sequelize) {
    super.init(
      {
        quantity: DataTypes.DOUBLE,
        type: DataTypes.ENUM('credit', 'draft')
      },
      {sequelize}
    )
  }

  static associate(models) {
    this.belongsTo(models.Card, {foreignKey: 'card_id', as: 'card'});
  }

}

module.exports = Transfer;