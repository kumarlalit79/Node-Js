import jwt from 'jsonwebtoken'
import {User} from '../Models/User.js'

export const isAuthenticated = async (req,res,next) =>{

    // token lere
    const token = req.header('Auth')

    console.log(token);

    if (!token) { // agr token nahi mila
        return res.json({
            message : "Login First",
            success : false
        })        
    }

    // if token hamare pass aa chuka hai,to usko verify karna hai
    const decoded = jwt.verify(token , process.env.JWT); 

    // dekh lo decoded mai aa kya raha hai
    console.log("Token data" , decoded);

    const id = decoded.userId;

    // db se find karna hai
    let user = await User.findById(id);
    if(!user){
        return res.json({
            message : "User not found",
            success : false
        }) 
    }

    // agr user mil jaye to
    // user ko ham apne hisaab se globally save kar sakte hai
    req.userGlobal = user; // so jb jb ham isAuth middleware ko use karenge tb tb ham is global variable ko use kar payenge

    // itna karne se verify ho gaya, ab 

    next();
    

}