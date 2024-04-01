const mongoose = require("mongoose");
// const autoIncrement = require('mongoose-auto-increment');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
// userSchema.plugin(autoIncrement.plugin, 'user');
module.exports = mongoose.model("user",userSchema);