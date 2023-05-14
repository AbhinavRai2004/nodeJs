// to create a server.
// http module handles server request and response.

const http = require('http');

// http.createServer((req, resp) => {
//     resp.write("<h1>Hello This is Abhinav Rai How can I help you</h1>");
//     resp.end();
// }).listen(4500);

// create server using separate function.

function call(req, resp) {
    resp.write("<h1>Hello This is Abhinav Rai How can I help you</h1>");
    resp.end();
}

http.createServer(call).listen(5500);