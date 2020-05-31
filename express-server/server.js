const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send(`Hello World!`);
});

// GET /hello?name=Name
app.get('/hello', (req, res) => {
    res.send(`Hello ${req.query.name}!`);
});

// GET /hello/:id
app.get('/hello/:id', (req, res) => {
    res.send(`Hello ${req.params.id}!`);
});

app.listen(port, () => console.log(`Example app listening on port port!`))