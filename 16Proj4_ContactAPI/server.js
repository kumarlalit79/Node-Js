import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'express'
import userRouter from './Routes/user.js'
import contactRouter from './Routes/contact.js'

const app = express();

app.use(bodyParser.json())

// Middleware.
app.use('/api/user' , userRouter);


// home api
app.get('/' , (req,res) => {
    res.json({
        message : "Every thing is fine"
    });
});

// contact router
app.use('/api/contact' , contactRouter)

mongoose.connect("mongodb+srv://luckyarya0101_db_user:ZJcto5ONGZHidEiL@cluster0.wwo1jq6.mongodb.net/" , {
    dbName:"Nodejs_Learning"
})
.then(() => console.log("Connected"))
.catch((err) => console.log(err))

const port = 2000;
app.listen(port , () => console.log(`Server is running on port ${port}`))