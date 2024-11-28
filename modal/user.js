const mangoose = require('mongoose');

const userSchema = new mangoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now(),
    }
});
module.exports = mangoose.model('users', userSchema);