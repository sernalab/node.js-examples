var fs = require('fs')
var path = require('path')

var fileToRead = process.argv[2] //position 2 cause of: node(0) app.js(1) test.txt(2)
var pathToRead = path.join('docs', fileToRead)

/* Asynchronous Way */
fs.readFile(pathToRead, 'utf8', function (err, contentFile) {
  if (err) throw err
  console.log(contentFile)
})

/* Synchronous Way */
// var contentFile = fs.readFileSync(pathToRead, 'utf8')
// console.log(contentFile)

console.log('after readFile...')