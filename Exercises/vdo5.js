var http=require('http');
var server=http.createServer(engine);

server.listen(1337, function() {
	console.log('server was hit by a request');
});

function engine(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain', 'teeek': 'from code.com'});
	response.end('Hey there, from the server! :D, Request from: '+ request.url);

}

 