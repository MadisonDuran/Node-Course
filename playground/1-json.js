const fs = require('fs') // import the file system module
//const book = {
    //title: 'Ego is the Enemy',
    //author: 'Ryan Holiday'
//}

//const bookJSON = JSON.stringify(book)
//console.log(bookJSON.title)

//const parsedData = JSON.parse(bookJSON)
//console.log(parsedData.author)

//fs.writeFileSync('1-json.json', bookJSON)

//const dataBuffer = fs.readFileSync('1-json.json')
//const dataJSON = dataBuffer.toString()
//const data = JSON.parse(dataJSON)
//console.log(data.title)
//console.log(dataBuffer.toString())

const dataBuffer = fs.readFileSync('1-json.json') // read the JSON file
const dataJSON = dataBuffer.toString() // convert the buffer to a string
const user = JSON.parse(dataJSON) // parse the JSON string to an object

user.name = 'Madison' // modify the object
user.age = 24 // modify the object

const userJSON = JSON.stringify(user) // convert the object back to a JSON string
fs.writeFileSync('1-json.json', userJSON) // write the JSON string to the file