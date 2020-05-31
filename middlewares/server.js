const express = require('express')
const app = express()
const port = 8080

app.use((req, res, next) => {
    // user: password 
    if(res.header('Authorization') !== "Basic dXn") {
        res.header('WWW-Authenticate', 'Base');
        res.sendStatus(401);
    } else {
        next();
    }
})

app.use((req, res, next) => {
    console.log(new Date().toISOString());
    next();
})

// GET /person
app.get('/person', (req, res) => {
    console.log('get person')
    res.send({ name: "Person" });
});

// GET /user
app.get('/user', (req, res) => {
    console.log('get user')
    res.send({ name: "User" });
});


app.listen(port, () => console.log(`Example app listening on port port!`))