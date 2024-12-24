const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    otp:{
        type: String
    },
    isEmailvarified:{
        type: Boolean,
        default: true
    },
    role:{
        type:String,
        role:["user","marchant","admin"],
        default: "false"
    }
    
})

const User = mongoose.model('User',userSchema);

module.exports = User;