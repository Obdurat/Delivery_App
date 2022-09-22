const { DataTypes } = require('sequelize');

const Attributes = {
  saleId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'sale_id',
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
    field: 'product_id',
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

  SalesProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, { through: models.SalesProducts, foreignKey: "product_id" });
    models.Sales.belongsToMany(models.Products, { through: models.SalesProducts, foreignKey: "sale_id" });
  };

  return SalesProducts;
}; 