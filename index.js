const http = require('http');

const server = http.createServer((request, response) => {
    response.write('<html>');
    response.write('<head><title>wubba</title></head>');
    response.write('<body><h1>Wubbalubbadubdub!!!</h1></body>');
    response.write('</html>');
    return response.end();
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
