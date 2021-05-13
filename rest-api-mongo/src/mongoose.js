const mongoose = require('mongoose');

const KEY = 'mongodb+srv://vlad:yYydT3yJdvnuNgq@cluster0.2bmwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(KEY, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', function(err) {
  console.log(err.message);
});

db.once('open', function callback() {
  console.log('Connected to MongoDB!');
});

// Schemase

const Schema = mongoose.Schema;

const Person = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
})

// TODO: add other schemate there

// Models

const PersonModel = mongoose.model('person', Person);

// TODO: add other modules thrre

module.exports = {
  PersonModel
}