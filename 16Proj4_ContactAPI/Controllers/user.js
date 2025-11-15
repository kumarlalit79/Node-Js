import express from 'express'
import mongoose from 'mongoose'
import {User} from '../Models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req,res) => {
  
    // console.log(req.body);
    const {name,email,password} = req.body;
    if(name == "" || email == "" || password == ""){
        return res.json({ // .json likha hai to json ki form mai msg do
            message : "All fields are required"
        });
    }

    let user = await User.findOne({email}) // email ke basis pe find krre
    if(!user){

        // DB mai add krne se pehle hamko hash karna hai
        const hashPassword = await bcrypt.hash(password,10);    

        // Adding the user into DB
        user = await User.create({name,email,password : hashPassword});
    }
    else{
        res.json({
            message : "User already exist",
            success : false
        })
    }

    res.json({
        message:'User created successfully',
        success : true,
        user : user // jisse pata chal jaye ki konsa user register hua hai
    })
}

export const login = async (req,res) => {
    const {email,password} = req.body

    if(User.email == "" || User.password == ""){
        return res.json({ 
            message : "All fields are required"
        });
    }

    const user = await User.findOne({email})
    if (!user) {
        res.json({
            message:"User does not exist",
            success:false
        })
    }
    
    // dcrypting password
    const validPassword = await bcrypt.compare(password , user.password)
    if (!validPassword) {
        return res.json({
            message:"Invalid password",
            success:false
        })
    }
    else{
        // jwt
        const token = jwt.sign({userId : user._id} , process.env.JWT ,{ expiresIn: "1h" } )

        res.json({
            message:`Welcome ${user.name}`,
            token : token,
            success:true
        })
    }
}