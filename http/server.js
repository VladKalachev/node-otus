const http = require('http');
const fs = require('fs');
const post = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Expires': '0'
    })
    fs.createReadStream('./index.html').pipe(res);
})

server.listen(post, '0.0.0.0', () => {
    console.log('Server started!');
});