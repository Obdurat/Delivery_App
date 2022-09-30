'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
