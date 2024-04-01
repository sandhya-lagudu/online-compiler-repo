// const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const problemSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    problemDescription:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        required:true
    },
    testcases:[{
        input:String,
        output:String
    }]
});

module.exports=mongoose.model("problem",problemSchema);