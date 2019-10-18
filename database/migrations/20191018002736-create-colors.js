'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'colors',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        first_color: {
          type: Sequelize.STRING(6),
          allowNull: false,
        },
        second_color: {
          type: Sequelize.STRING(6),
          allowNull: false,
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('colors');
  }
};
