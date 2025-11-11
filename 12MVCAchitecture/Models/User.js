import mongoose from 'mongoose'

// userSchema means table ka kaam - userTable bhi likh skte
const userSchema = new mongoose.Schema({

    // ab yaha col define kardo 
    name:{type:String , required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    age:{type:Number},
    phoneNumber:{type:Number},
    createdAt:{
        type:Date,
        default:Date.now
    },
})

export const User = mongoose.model("user" , userSchema)