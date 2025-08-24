//const add = require('./utils.js')
//const sum = add(4, -2)
//console.log(sum)

//const validator = require('validator')
//console.log(validator.isURL(http/mead.io))

const getNotes = require('./notes.js')
import chalk from 'chalk';

const msg = getNotes();
console.log(msg)

const greenMsg = chalk.green.inverse.bold('Success!');
console.log(greenMsg);



