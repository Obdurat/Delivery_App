'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('sales_products',
    [{
      sale_id: 1,
      product_id: 2,
      quantity: 3,
    },
    {
      sale_id: 2,
      product_id: 5,
      quantity: 2,
    }], { timestamps: false });
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('sales_products', null, {});
  }
};
