const { Sequelize } = require('sequelize');
const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USERNAME;
const dbpass = process.env.DB_PASS;
const dbhost = process.env.DB_HOST;
const dbdialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(dbname, dbuser, dbpass, {
    host: dbhost,
    dialect: dbdialect
  });

module.exports = sequelize;