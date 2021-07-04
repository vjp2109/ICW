const express = require('express');
const app = express();
const PORT = 8080;
const morgan = require('morgan');
const townRouter = require('./routes/towns');
const monsterRouter = require('./routes/monsters');
const { db } = require('./db'); // this is for db the folder: if you don't provide a filename, it will look automatically for index.js


// GET '/monsters/1' // keep looking for the next REGULAR route handler until it matches OR it completely fails and hits our custom handler.


const setup = async () => {
  try {
    // logging middleware
    app.use(morgan('dev'));

    app.use('/towns', townRouter);
    app.use('/monsters', monsterRouter);


    // 404 not found page is going to be the biggest else clause in our application
    // we want to match on EVERY SINGLE ROUTE that doesn't exist
    // inside of here, I want to send back an h1 tag that says I am sorry, I cannot find your link
    app.use((req, res) => {
      res.status(404).send('<h1>Man, I could not find this page for the life of me</h1>');
    });

    // error handling middleware -> the same function that we've used BUT the signature callback now includes 4 arguments instead of 3
    app.use((err, req, res, next) => {
      console.log(err.stack);
      res.status(err.status || 500).send(err.message);
    });

    // syncing the database before listening to the port!
    await db.sync(); // you want to make sure your database tables are prepped and ready to go BEFORE you open up a port to the server
    app.listen(PORT, () => {
      console.log(`Striking lightning on some axe stumps on PORT ${PORT}`);
    });
  } catch(e) {
    console.log(e);
  }
}

setup();
