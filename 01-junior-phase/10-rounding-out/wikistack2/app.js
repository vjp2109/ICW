const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const { errorPage, notFoundPage } = require('./views');

app.use(morgan('dev')); //logging middleware
app.use(require('method-override')('_method'));
app.use(express.static(path.join(__dirname, './public'))); //serving up static files (e.g. css files)
app.use(express.urlencoded({ extended: false })); //parsing middleware for form input data
app.use(express.json());

app.use('/wiki', require('./routes/wiki'));
app.use('/users', require('./routes/users'));

app.get('/', function (req, res) {
  res.redirect('/wiki/');
});

app.use((req, res) => {
  res.status(404).send(notFoundPage());
});

// Custom error handler for express
app.use((err, req, res, next) => {
  // stack trace
  console.error(err.stack);
  // error message for client
  // err.message

  // This is not really descriptive so not useful for the client
  // res.sendStatus(500);
  res.status(500).send(errorPage(err));
});

module.exports = app;
