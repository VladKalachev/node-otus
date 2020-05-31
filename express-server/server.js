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

// GET /person
app.get('/person', (req, res) => {
    const person = { name: 'Name'};
    res.send(person)
});

app.get('/person/file', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});


app.get('/person/status', (req, res) => {
    // 204 - no content
    res.sendStatus(204);
});

app.listen(port, () => console.log(`Example app listening on port port!`))