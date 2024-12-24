import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    isBlocked : {
        type : Boolean,
        default : false
    },
    password : {
        type : String,
        required : true
    },
    
    type : {
        type : String,
        default : "customer"
    },
    image : {
        type : String,
        default : "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1733909715~exp=1733913315~hmac=bce7d729c810f52401047b188a56d5e9c48f16612eb2f0391ccb6e83f8026607&w=740"
    }

})

    const User = mongoose.model("users", userSchema)

    export default User;
    