const mongoose = require('mongoose');

mongoose.connect(process.env.KEY);

const db = mongoose.connections;

db.on('error', function(err) {
  console.log(err.message);
});

db.once('open', function() {
  console.log('Connected to MongoDB!');
});

// Schemase
const Schema = mongoose.Schema;

const Person = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
})

// Models
const PersonModel = mongoose.model('person', Person);

module.exports = {
  PersonModel
}