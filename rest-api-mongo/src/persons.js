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

  person.save((err) => {
    if (!err) {
      res.statusCode = 201;
      return res.send(person);
    } else {
      if(err.name === 'ValidationError') {
        res.statusCode = 400;
        res.send({error: 'Validation error'});
      } else {
        res.statusCode = 500;
        res.send({error: 'Server error'});
      }
    }
  })
});

router.get('/api/person/:id', function(req, res) {
  return PersonModel.findById(req.params.id, (err, person) => {
    if (!person) {
      res.statusCode = 404;
      return res.send({error: 'Not found'});
    }
    if (!err) {
      return res.send(person);
    } else {
      res.statusCode = 500;
      return res.send({error: 'Server error'});
    }
  })
})