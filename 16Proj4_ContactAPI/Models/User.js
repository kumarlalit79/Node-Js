import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type:String , require : true},
    email : {type:String , require : true},
    password : {type:String , require : true},
    createdAt : {type:Date , default : Date.now},
}) 

// ye fields banane ke baaad hamko model banana hota hai.
export const User = mongoose.model("userApi" , userSchema);