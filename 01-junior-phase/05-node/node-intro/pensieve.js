// require
const { dumbledore } = require('./dumbledore-land'); // require is a function whose return value is the module.exports of your file argument
// const express = require('express');
const chalk = require('chalk');
function retrieveThoughts(human) {
  console.log(chalk.cyan(`${human.name} is thinking about ${human.memory}`));
}

const harry = {
  name: 'Harry Potter',
  memory: 'Christmas at Hogwarts with Ron'
}

retrieveThoughts(harry);
retrieveThoughts(dumbledore);
// console.log('dirname', __dirname);
// console.log('filename', __filename);
