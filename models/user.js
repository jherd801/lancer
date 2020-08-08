const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    // anyway to verify it is in email format ("@" & ".")?
    email: { 
        type: String, 
        required: true
    },
    // hashing password - ( https://stackoverflow.com/questions/14588032/mongoose-password-hashing )
    // Other ways to hide password?
    password: { 
        type: String, 
        required: true 
    },
    zipcode: { 
        type: String, 
        required: true 
    }
    // location ? (what type and how would we get it)
});

const User = mongoose.model("User", usersSchema);

module.exports = User;