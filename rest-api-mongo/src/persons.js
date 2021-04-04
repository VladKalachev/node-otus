const express = require('express');
const router = express.Router();

const PersonModel = require('./persons').PersonModel;

router.get('/api/person', (req, res) => {
  return PersonModel.find((err, persons) => {
    if(!err) {
      return res.send(persons);
    } else {
      res.statusCode = 500;
      return res.send({ error: "Server Error" });
    }
  });
});

router.post('/api/person', function(req, res) {
  const person = new PersonModel({
    name: req.body.name,
    age: req.body.age,
  });

  person.save()
});