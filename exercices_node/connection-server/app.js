var http = require('http'); // how modules are required

http.createServer(function(request, response) {

    response.writeHead(200); // status code in header
    response.write('First Step'); // response body
    response.end(); // close the connection

}).listen(8080, function() { // listen for connections on this port

    console.log('Listening on port 8080...');

});