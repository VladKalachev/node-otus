const express = require('express')
const app = express()
const port = 8080

app.use((req, res, next) => {
    // user:password 
    if(req.header('Authorization') !== "Basic dXNlcjpwYXNzd29yZA==") {
        res.header('WWW-Authenticate', 'Basic');
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