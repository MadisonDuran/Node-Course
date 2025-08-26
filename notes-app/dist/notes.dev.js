"use strict";

var fs = require('fs');

var chalk = require('chalk');

var notes = require('./notes.js');

var getNotes = function getNotes() {
  return 'Your notes...';
};

var addNote = function addNote(title, body) {
  var notes = loadNotes();
  var duplicateNote = notes.find(function (note) {
    return note.title === title;
  });
  debugger;
  console.log(duplicateNote);
  console.log(title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log('New note added!');
  } else {
    console.log('Note title taken!');
  }
};

var removeNote = function removeNote(title) {
  var notes = loadNotes();
  var notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

var listNotes = function listNotes() {
  var notes = loadNotes();
  console.log(chalk.inverse('Your notes'));
  notes.forEach(function (note) {
    console.log(note.title);
  });
};

var readNote = function readNote(title) {
  var notes = loadNotes();
  var note = notes.find(function (note) {
    return note.title === title;
  });

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('Note not found!'));
  }
};

var saveNotes = function saveNotes(notes) {
  var dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

var loadNotes = function loadNotes() {
  try {
    var dataBuffer = fs.readFileSync('notes.json');
    var dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};