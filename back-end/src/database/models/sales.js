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
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'total_price',
  },
  deliveryAddress: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'delivery_address',
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
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Pendente'
  }
};

module.exports = (sequelize) => {
  const Sales = sequelize.define('sales', Attributes, {
      underscore: true,
      timestamps: false,
      tableName: 'sales',
    },
  );

  return Sales;
};
