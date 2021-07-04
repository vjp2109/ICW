const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/victoria-island', { logging: false });
// stops all of the CRAZY logging statements that we get when we add and create anything in the database

module.exports = db;
