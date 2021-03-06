require('dotenv').config()
const { Sequelize } = require('sequelize');

const db = new Sequelize('messenger', process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres'
});
  
module.exports = db;