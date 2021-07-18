const sequelize = require('../config/database');
const {Model, DataTypes} = require('sequelize');

class Password extends Model {}

Password.init({
  // Model attributes are defined here
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  owner_id: {
      type: DataTypes.STRING,
      allowNull: false
  },
  web_url: {
    type: DataTypes.STRING
  },
  username: {
    type: DataTypes.STRING
  },
  userpass: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Password' // We need to choose the model name
});

module.exports = Password;