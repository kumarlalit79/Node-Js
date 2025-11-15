import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'express'
import userRouter from './Routes/user.js'
import contactRouter from './Routes/contact.js'
import { config } from 'dotenv'

const app = express();

app.use(bodyParser.json())

// .env setup
config({path:'.env'})

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

mongoose.connect(process.env.MONGO_URI , {
    dbName:"Nodejs_Learning"
})
.then(() => console.log("Connected"))
.catch((err) => console.log(err))

const port = process.env.PORT;
app.listen(port , () => console.log(`Server is running on port ${port}`))