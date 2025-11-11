import express from 'express'
import mongoose from 'mongoose'

const app = express()

mongoose.connect("mongodb+srv://luckyarya0101_db_user:ZJcto5ONGZHidEiL@cluster0.wwo1jq6.mongodb.net/" , {
    dbName:"Nodejs Learning"
})
.then(() => console.log("MongoDb Connected"))
.catch((err) => console.log(err))

const port = 2000

app.listen(port , () => console.log(`Server is running at port ${port}`))