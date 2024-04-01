const mongoose=require("mongoose");

const solutionSchema=new mongoose.Schema({
    uid:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    probId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    lang:{
        type:String,
        required:true
    },
    sol:{
        type:String,
        required:true
    },
    verdict:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("solution",solutionSchema);