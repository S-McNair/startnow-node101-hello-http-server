//write your code here

var http = require('http');      //import node HTTP library via 'require' statement
var server = http.createServer(function(request, response)  {
  //create variable to hold the server & use http.createServer to turn local machine into HTTP server & runs annon funct handling arguments for requests and response
  response.writeHead(200);
  console.log(request.headers);
  response.end('Hello World');
})

server.listen(8080);     //specify which port the server should be listen to for a response

//use 'node index.js to run the server
//use 'control+c' to stop the server after changes to the code, run node index.js and refresh the localhost:8080 browser
