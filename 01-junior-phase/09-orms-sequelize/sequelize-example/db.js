const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/wiki');

// define our models
// db.define -> 2+ arguments
// 1st argument: singular version of your table name
// 2nd argument: an object containing the fields necessary for your table/ keys are the table, and the values are the qualifiers (what their data type is, and any validations)

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pictureUrl: Sequelize.STRING
});

// ModelName.hookName(callback that accepts your instance as an argument)
// User.beforeValidate((user) => {
//   console.log('beforeValidate');
//   // user.name = null;
// });

// User.afterValidate((user) => {
//   console.log('afterValidate');
// });

// User.beforeCreate((user) => {
//   console.log('beforeCreate');
// });

// User.afterCreate((user) => {
//   console.log('afterCreate');
// });

const Dog = db.define('dog', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

// class methods -> looking for or dealing with several instances
// If you make your class or instance methods into an arrow function, "this ain't that". We will lose access to our `this` context!!
Dog.findPuppies = async function() {
  // all of our query methods (findAll, findOne) accepts an argument that is an OBJECT where we can specify the qualifications of what instances we want back
  // where we place our `where` clause

  // `this` refers to our Dog class -> there IS no `this.name`

  // you don't have to use a try/catch block here because since we are already catching it in our Express routes, then Express will handle the error for us

  const puppies = await this.findAll({
    where: {
      age: {
        [Sequelize.Op.lte]: 1
      }
    }
  });
  return puppies;
  // returns a promise
}

// instance methods -> change a field or adjust one instance/row in the db
Dog.prototype.getStatement = function() {
  // `this` -> dog instance
  return `The dog named ${this.name} is ${this.age} years old!`;
}


// on Monday, we will talk about many to many relationships


// associations
// 1 to many relationship between Dog and User
// Dog will have 1 user
// User can have many dogs
Dog.belongsTo(User); // establish a foreign key on the Dog table called user
User.hasMany(Dog); // 1 to many relationship


// when creating associations, we are trying to make a specific change in our DB: adding a field, etc.
// when syncing our database, the "db.sync" call or "model.sync" call creates a NEW TABLE and associations/etc/fields if it DOES NOT EXIST.
// if we already had a Dog table, any future changes we made to the fields will NOT make a change BECAUSE the table exists.

// in order for us right now to make an additional field, we need to recreate the table, which forces us to drop the table + create again ({ force: true })


// to identify where your magic methods are located, you can find out through looking at the model's prototype

console.log('Dog magic methods', Object.keys(Dog.prototype));
console.log('User magic methods', Object.keys(User.prototype));



module.exports = {
  User,
  Dog,
  db
}

// module.exports = db;
