const mongoose = require('mongoose');

mongoose.connect(process.env.KEY);

const db = mongoose.connections;

db.on('error', function(err) {
  console.log(err.message);
});

db.once('open', function() {
  console.log('Connected to MongoDB!');
});