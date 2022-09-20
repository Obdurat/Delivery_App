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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  }
};

module.exports = (sequelize) => {
  const Users = sequelize.define('Users', Attributes, {
      underscore: true,
      timestamps: false,
      tableName: 'Users',
    },
  );

  Users.associate = (models) => {
    Users.hasMany(models.Sales, { foreignKey: 'userId' });
    Users.hasMany(models.Sales, { foreignKey: 'sellerId' });
  };

  return Users;
};