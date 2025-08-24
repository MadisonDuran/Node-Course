//const add = require('./utils.js')
//const sum = add(4, -2)
//console.log(sum)

//const validator = require('validator')
//console.log(validator.isURL(http/mead.io))

const getNotes = require('./notes.js')
import chalk from 'chalk';

const msg = getNotes();
console.log(msg)

const greenMsg = chalk.blue.inverse.bold('Success!');
console.log(greenMsg);

const command = process.argv[2]
console.log(process.argv)

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}





