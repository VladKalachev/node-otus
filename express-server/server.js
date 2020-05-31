const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send(`Hello World!`);
});

app.get('/hello', (req, res) => {
    console.log('res', req.query);
    res.send(`Hello ${req.query.name}!`);
});

app.listen(port, () => console.log(`Example app listening on port port!`))