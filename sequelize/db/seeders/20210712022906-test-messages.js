'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('Messages', [
      {
        message: 'Hello from Sequelize!',
      },
      {
        message: 'Hello from Heroku!',
      },
      {
        message: 'Hello from Typescript!',
      }
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Messages', null, {});

  }
};
