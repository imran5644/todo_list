const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

