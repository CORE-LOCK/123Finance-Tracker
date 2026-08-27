import mongoose from "mongoose"

const user = new mongoose.Schema({
    Name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type:String,
        required: true
    }
},{timestamps : true});

const userModel = mongoose.model("userModel", user);

export default userModel;