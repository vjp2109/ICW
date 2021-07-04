const express = require('express');
const app = express();
const PORT = 8080;
const morgan = require('morgan');
const { User, Dog, db } = require('./db');

app.use(morgan('dev'));

app.get('/puppies', async (req, res, next) => {
  try {
    const puppies = await Dog.findPuppies();
    res.send(puppies);
  } catch (e) {
    next(e);
  }
})

app.get('/dogs/:dogId', async (req, res, next) => {
  try {
    const dog = await Dog.findByPk(req.params.dogId);
    // res.send(dog.getStatement());
    const owner = await dog.getUser(); // this exists because we wrote "Dog.belongsTo(User)";
    res.send(owner);
  } catch (e) {
    next(e);
  }
})

app.get('/', async (req, res, next) => {
  try {
  // res.send('<h1>Welcome to our Sequelize intro!</h1>');
  // const users = await User.findAll(); // client.query('select * from users');
  // findAll returns to you an array of user instances (objects)
  // EVEN IF IT IS EMPTY, OR ONLY HAS 1 INSTANCE
  // res.send(users);

  // I want to create a new user
  // `new` keyword to create a new instance of a User
  // `.save` method on the user to actually insert into the database
  // const person = new User({
  //   name: 'Kate',
  //   pictureUrl: ''
  // });

  // await person.save();

  // optionally, you can pass in the object directly into the class method 'create'
  const person = await User.create({
    name: 'Tao',
    pictureUrl: ''
  });

  res.send(person);


  } catch (e) {
    next(e); // MUST include this to handle errors in express
    // express otherwise will just hang there and the internet breaks
  }
});

app.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id); // accepts an argument which is the ID we are looking for
    // returns to us an object
    // res.send(user);

    const dogs = await user.getDogs(); // special method given to us because we wrote "User.hasMany(Dog)"

    res.send(dogs);

  } catch (e) {
    next(e);
  }
})

async function init () {
  try {

    // in order to drop our database, we pass in an argument to our model.sync method that is an object called { force: true }
    // once you have run it 1 time, you don't run it again (remove the force true after running it once)

    await db.sync();
    // await User.sync(); // want my db to be synced and tables made BEFORE I start my server
    // await Dog.sync();
    // await db.sync();
    app.listen(PORT, () => {
      console.log(`Waving through a window on PORT ${PORT}`);
    });
  } catch (e) {
    console.log('On no, my window is broken, can\'t wave', e);
  }
}

init(); // asynchronous function
