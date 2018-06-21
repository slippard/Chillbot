let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    messageCount: {
        type: Number,
        required: true
    },
    money: {
        type: Number,
        required: true
    },
    collected: {
        type: String,
        required: true
    }
});

let User = module.exports = mongoose.model('User', userSchema);
