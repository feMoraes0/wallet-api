'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert(
      'colors', 
      [
        {
          name: 'orange',
          first_color: 'FF5722',
          second_color: 'FFEB3B',
        },
        {
          name: 'green',
          first_color: '69F0AE',
          second_color: 'FFEB3B',
        },
        {
          name: 'blue',
          first_color: '448AFF',
          second_color: '69F0AE',
        },
        {
          name: 'ocean',
          first_color: 'B2FF59',
          second_color: '2196F3',
        },
        {
          name: 'red',
          first_color: 'FF5252',
          second_color: 'E040FB',
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('colors', [{
      name: 'orange',
      name: 'green',
      name: 'blue',
      name: 'ocean',
      name: 'red',
    }]);
  }
};
