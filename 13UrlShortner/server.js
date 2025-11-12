import express from 'express'
import mongoose from 'mongoose';
import { shortUrl , getOriginalUrl } from './Controllers/url.js';

const app = express();
app.use(express.urlencoded({
    extended:true
}))

mongoose.connect("mongodb+srv://luckyarya0101_db_user:ZJcto5ONGZHidEiL@cluster0.wwo1jq6.mongodb.net/" , {
    dbName:"Nodejs_Learning"
}).then(() => console.log("Connected")).catch((err) => console.log(err))


app.get('/' , (req,res) =>{
    res.render('index.ejs' , {shortUrl : null});
})

app.post('/short' , shortUrl);

app.get('/:shortCode' , getOriginalUrl)

const port = 2000;



app.listen(port , () => console.log(`Server is running at port ${port}`));