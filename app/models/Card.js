const { Model, DataTypes } = require('sequelize');

class Card extends Model {
  
  static init(sequelize) {
    super.init(
      {
        label: DataTypes.STRING(19),
        type: DataTypes.ENUM('credit', 'event'),
        coin: DataTypes.ENUM('dolar', 'euro', 'pound')
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Color, { foreignKey: 'color_id', as: 'color'});
  }

}

module.exports = Card;