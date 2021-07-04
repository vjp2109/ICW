const db = require('./_db');
const Town = require('./town');
const Monster = require('./monster');

// 1 to many
// Town.hasMany(Monster);
// Monster.belongsTo(Town, { as: 'home' });

// many to many
// ModelA.belongsToMany(ModelB, { through: joinTableName });
Town.belongsToMany(Monster, { through: 'Monster-Town' });
Monster.belongsToMany(Town, { through: 'Monster-Town' });

console.log('Town magic methods', Object.keys(Town.prototype));
console.log('Monster magic methods', Object.keys(Monster.prototype));

module.exports = {
  db,
  Town,
  Monster
};
