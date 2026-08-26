import mongoose from "mongoose"

const user = new mongoose.Schema({
    firstName:{
        type : String,
        required : true
    },
     lastName:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    phoneno:{
        type : Number,
        required : true
    },
    password:{
        type:String,
        required: true
    }
},{timestamps : true});

const userModel = mongoose.model("userModel", user);

export default userModel;