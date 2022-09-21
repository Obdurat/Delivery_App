'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Sales',
      [{
        id: 1,
        user_id: '1',
        seller_id: '2',
        total_price: '2.20',
        delivery_adress: 'street',
        delivery_number: '12345',
        sale_date: '2001/08/01',
        status: true,
      }], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Sales', null, {});
  },
};
