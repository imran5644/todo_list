const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_development');
const db = mongoose.connection;

db.on('error', console.log.bind(console, "Error connecting to MongoDB"));

db.once('open', () => {
    console.log("successfully connected to MongoDB")
});


module.exports = db;