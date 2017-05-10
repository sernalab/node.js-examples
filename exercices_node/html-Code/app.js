// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// var request = require('request')
// var url = process.env.URL || 'www.google.es'

// if (!url) throw 'No URL!'

// request(url, function (error, response, body) {
// console.log('body:', body)
// console.log('error:', error)
// console.log('statusCode:', response && response.statusCode)
// })

var fs = require('fs')
var request = require('request')
var fileToRead = 'link.txt'

fs.readFile(fileToRead, 'utf8', function(err, linkToRequest) {
    if (err) throw err
    request(linkToRequest, function(err, response, body) {
        if (err) throw err
        console.log(body)
    })
})
