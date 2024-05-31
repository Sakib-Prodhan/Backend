const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    name: String,
    email: {
        type: String,
        requried: true
    },
    password:{
        type: String,
        requried: true 
    }
})

module.exports = mongoose.model('userlist', userSchema)