const mongoose=require("mongoose");
// const autoIncrement = require('mongoose-auto-increment');
require("dotenv").config();
const DBConnection=async()=>{
    const MONGO_URI=process.env.MONGO_URL;
    try {
        await mongoose.connect(MONGO_URI,{useNewUrlParser:true},{useUnifiedTopology: true});
        // autoIncrement.initialize(mongoose.connection);
        console.log("Database connection established");
        
    } catch (error) {
        console.log("Error connecting to DB",error.message);
    }
    
};


module.exports={DBConnection};