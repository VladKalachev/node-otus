const http = require('http');
const fs = require('fs');

const port = 3000
const hostname = '127.0.0.1'

fs.readFile('./index.html', 'utf-8', (err, text) => {

    if(err) {
        throw new Error('Error loading server');
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(text);
    })

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    })
})
