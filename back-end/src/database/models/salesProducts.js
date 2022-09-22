const { DataTypes } = require('sequelize');

const Attributes = {
  saleId: {
    type: DataTypes.INTEGER,
    unique: false,
    field: 'sale_id',
    primaryKey:true,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
    field: 'product_id',
    primaryKey:true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },  
};

module.exports = (sequelize) => {
  const SalesProducts = sequelize.define('SalesProducts', Attributes, {
      underscore: true,
      timestamps: false,
      tableName: 'SalesProducts',
    },
  );

  return SalesProducts;
}; 