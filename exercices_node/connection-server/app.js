// var http = require('http') // how modules are required

// http.createServer(function(request, response) {

//     response.writeHead(200) // status code in header
//     response.write('First Step') // response body
//     response.end() // close the connection

// }).listen(8080, function() { // listen for connections on this port

//     console.log('Listening on port 8080...')

// });



// also you con do it in this way:

// var http = require('http')

// var server = http.createServer()

// server.on('request', function (req, res){
// 	//res.end("Success, I'm listening from port 3000") comment line 25 and 29
// 	res.end('End of request')
// })

// server.listen(3000, function(){
// 	console.log('Listening PORT 3000')
// })


//----------------
// with port var

// var http = require('http')

// var server = http.createServer()
// var PORT = 3000

// server.on('request', function (req, res){
// 	res.end('End of request')
// })

// server.listen(PORT, function () {
// 	console.log('Listening PORT ' + PORT)
// })


//----------------
// specifing PORT

var http = require('http')

var server = http.createServer()
var PORT = process.env.PORT || 3000 //PORT default 3000 using ||

server.on('request', function (req, res){
	res.end('End of request')
})

server.listen(PORT, function () {
	console.log('Listening PORT ' + PORT)
})







