//const add = require('./utils.js')
//const sum = add(4, -2)
//console.log(sum)

//const validator = require('validator')
//console.log(validator.isURL(http/mead.io))

const notes = require('./notes.js')
const chalk = require('chalk');
const greet = require('./module1')

console.log(greet('Chris Brown'));

// create an alias for a function
serverStatus

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

const yargs = require('yargs')
console.log(yargs.argv)

// Customize yargs version
yargs.version('1.1.0')

// Create add command
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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
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
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})


// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
          describe: 'Note title',
          demandOption: true, 
          type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

const express = require('express');
const app = express();

// creating a route
app.get('/', (req, res) => {
    res.send("Hello Express!")
})

app.get('/weather', (req, res) => {
    res.send("My new weather page!")
    // make a call to an API
    //listen for the response
    // when data is received serve the page
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})


