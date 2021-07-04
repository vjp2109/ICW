const Sequelize = require('sequelize');
const db = require('./_db');

const Monster = db.define('monster', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  level: Sequelize.INTEGER,
  description: Sequelize.TEXT,
  imageUrl: Sequelize.STRING,
  // hasHighLevel: function() {}
});

// class Monster {
//   hasHighLevel() {
//     ...
//   }
// }

// const makeUser = user => {...}

// Book.beforeSave(makeUser);
// Book.beforeCreate(makeUser);


// instance.validate();


module.exports = Monster;
