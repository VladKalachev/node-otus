const express = require('express')
const app = express()
const port = 8080

const person = [
    {id: 1, name: 'Name', age: 15},
    {id: 2, name: 'Name', age: 20}
]

// GET /person/create?name=Test&age=17
app.get('/person/create', (req, res) => {
    const result = person.push({
            id: person.length + 1,
            name: req.query.name,
            age: Number(req.query.age)
    });
    res.send(person);
});

// GET /person/1
app.get('/person/:id', (req, res) => {
    const result = person.filter(per => per.id === Number(req.params.id));
    res.send(result);
});


app.listen(port, () => console.log(`Example app listening on port port!`))