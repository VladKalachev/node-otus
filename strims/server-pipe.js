const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
   fs.createReadStream('./example.html')
   .pipe(response);
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');