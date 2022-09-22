const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    field: 'user_id',
  },
  sellerId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    field: 'seller_id',
  },
  totalPrice: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'total_price',
  },
  deliveryAdress: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'delivery_adress',
  },
  deliveryNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'delivery_number',
  },
  saleDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'sale_date',
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
};

module.exports = (sequelize) => {
  const Sales = sequelize.define('Sales', Attributes, {
      underscore: true,
      timestamps: false,
      tableName: 'Sales',
    },
  ); 

  return Sales;
};