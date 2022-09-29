'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        id: 1,
        user_id: '3',
        seller_id: '2',
        total_price: '2.20',
        delivery_address: 'street',
        delivery_number: '12345',
        sale_date: '2001/08/01',
        status: 'Pendente',
      },
      {
        id: 2,
        user_id: '3',
        seller_id: '2',
        total_price: 2.20,
        delivery_address: 'strtt',
        delivery_number: '12345',
        sale_date: '2001/08/01',
        status: 'Entregue',
      }], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
