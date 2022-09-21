const { DataTypes } = require('sequelize');

const Attributes = {
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