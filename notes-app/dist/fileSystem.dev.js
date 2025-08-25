"use strict";

var fs = require('fs'); // Reading files


fs.readFile('example.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
  console.log(Cheeseburger);
}); // Writing a file

fs.writeFile('output.txt', 'This is some content', function (err) {
  if (err) throw err;
  console.log("This file has been saved!");
});