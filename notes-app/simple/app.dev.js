"use strict";

//const add = require('./utils.js')
//const sum = add(4, -2)
//console.log(sum)
//const validator = require('validator')
//console.log(validator.isURL(http/mead.io))
var notes = require('./notes.js');

var chalk = require('chalk');

var msg = getNotes();
console.log(msg);
var greenMsg = chalk.blue.inverse.bold('Success!');
console.log(greenMsg);
var command = process.argv[2];
console.log(process.argv);

if (command === 'add') {
  console.log('Adding note!');
} else if (command === 'remove') {
  console.log('Removing note!');
}

var yargs = require('yargs');

console.log(yargs.argv); // Customize yargs version

yargs.version('1.1.0'); // Create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
}) // Create remove command
.yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function handler(argv) {
    notes.removeNote(argv.title);
  }
}); // Create list command

yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function handler() {
    console.log('listing out all notes');
  }
}); // Create read command

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function handler() {
    console.log('Reading a note');
  }
});
yargs.parse();

var express = require('express');

var app = express(); // creating a route

app.get('/', function (req, res) {
  res.send("Hello Express!");
});
app.get('/contact', function (req, res) {
  res.send("My new contact page!");
});
var PORT = 3000;
app.listen(PORT, function () {
  console.log("Server is running at http://localhost:".concat(PORT));
});