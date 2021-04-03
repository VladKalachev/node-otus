const express = require('express');
const app = express();
const port = 8080;
// const personsRouter = require('./persons');

app.use(express.json());

// app.use(personsRouter);

app.listen(port, () => {
  console.log(`Express Server listening on port: ${port}`)
});
