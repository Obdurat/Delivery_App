'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      seller_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      total_price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      delivery_adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      delivery_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sale_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sales');
  }
};