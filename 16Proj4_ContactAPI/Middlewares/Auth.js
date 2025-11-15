

export const isAuthenticated = async (req,res,next) =>{

    // token lere
    const token = req.header('Auth')
    console.log(token);
    
}