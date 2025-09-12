const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{type:String,trim:true,required:true},
    username:{type:String,trim:true,required:true},
    age:{type:Number ,min:18,max:75},
    email:{type:String,trim:true,required:true,lowercase:true},
    password:{type:String,trim:true,required:true}

})

module.exports = mongoose.model("User",userSchema);