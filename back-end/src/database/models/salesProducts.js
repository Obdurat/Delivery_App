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
  const SalesProducts = sequelize.define('salesProducts', Attributes, {
      underscore: true,
      timestamps: false,
      tableName: 'salesProducts',
    },
  );

  SalesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    })

    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    })
  }

  return SalesProducts;
}; 