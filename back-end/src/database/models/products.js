const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    unique: false,
  },
  urlImage: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'url_image',
  },
};

module.exports = (sequelize) => {
  const Products = sequelize.define('products', Attributes, {
      underscore: true,
      timestamps: false,
      tableName: 'products',
    },
  );

  return Products;
}; 