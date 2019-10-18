'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'cards',
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        color_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'colors', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
        label: {
          type: Sequelize.STRING(19),
          allowNull: false
        },
        type: {
          type: Sequelize.ENUM('credit', 'event'),
          allowNull: false
        },
        coin: {
          type: Sequelize.ENUM('dolar', 'euro', 'pound'),
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cards');
  }
};
