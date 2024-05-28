const mongoose = require('mongoose');

//schema design
const  userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "name is required"],
    },
    email: {
        type: String,
        require: [true, "email is required and should be unique "],
        unique: true,
    },
    passwod: {
        type: String,
        require: [true, "password is required"],
    },

},
{ timestamps: true}
);

//export
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;