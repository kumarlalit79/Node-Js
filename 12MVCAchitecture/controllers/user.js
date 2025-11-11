import { User } from "../Models/User.js";

export const userRegister = async (req,res) => {
    console.log(req.body);

    try 
    {
        let user = await User.create(req.body);
        res.json({
            msg : "User created successfully",
            NewUser : user,
            success : true,
        });
    } 
    catch (error) 
    {
        res.json({
            msg : error.message
        });
    } 
}