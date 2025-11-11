import express from 'express'
import mongoose from 'mongoose'
import { userRegister } from './controllers/user.js';

const app = express();
app.use(express.urlencoded({
    extended:true
}))

mongoose.connect("mongodb+srv://luckyarya0101_db_user:ZJcto5ONGZHidEiL@cluster0.wwo1jq6.mongodb.net/" , {
    dbName:"Nodejs_Learning"
})
.then(() => console.log("Connected"))
.catch((err) => console.log(err))

// get route - to display page on webpage
app.get('/' , (req,res) =>{
    res.render('index.ejs')
})

// post route : to save data
app.post('/form-submit' , userRegister);

const port = 2000
app.listen(port , ()=> console.log(`Server is running at port ${port}`))