const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://username:password@localhost:5432/ecommerce', {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
