const http = require('http');


// Readable API

http.createServer((request, response) => {
    const {headers, method, url} = request;
    let body = [];
    request.on('data', (chank) => {
        body.push(chank);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        response.statusCode = 200;
        response.setHeader('Content-Type','application/json');
        const responseBody = {headers, method, url, body};
        response.write(JSON.stringify(responseBody));
        response.end();
    });
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
