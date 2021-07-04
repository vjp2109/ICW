const Sequelize = require('sequelize');
const db = require('./_db');

const Town = db.define('town', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  job: Sequelize.STRING
});

module.exports = Town;
