import express from "express"
import mongoose from "mongoose";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary'
import path from 'path'


const app = express();

app.use(express.urlencoded({
    extended:true
}))

cloudinary.config({ 
  cloud_name: 'dr3yyh78j', 
  api_key: '451433846639675', 
  api_secret: 'zMA-pP8AmEt-90bPQOvSs02zJ_A'
});



mongoose.connect("mongodb+srv://luckyarya0101_db_user:ZJcto5ONGZHidEiL@cluster0.wwo1jq6.mongodb.net/" , {
    dbName:"Nodejs_Learning"
}).then(() => console.log("Connected")).catch((err) => console.log(err))

// rendering login file
app.get('/login' , (req,res) =>{
    res.render('login.ejs' , {url:null});
});

// rendering register file
app.get('/register' , (req,res) =>{
    res.render('register.ejs' , {url:null});
});

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname); // yaha extension nikaal liya
    cb(null, file.fieldname + "-" + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password : String,
    filename : String,
    public_id : String,
    imgUrl : String
})
const User = mongoose.model("userNew" , userSchema);


app.post('/register', upload.single('file'), async (req, res) => {
  const file = req.file.path; // is line se file ke naam ka complete path aa jayega

//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;
//   ye teeno variable ko 1 line mein bhi bana skta hoon
const {name , email , password} = req.body

  const cloudinaryResponse = await cloudinary.uploader.upload(file,{
    folder:"NodeJs_Learning"
  })

  // ab database mai save karlo
  const db = await User.create({
    name,
    email,
    password,
    filename : file.originalname, 
    public_id : cloudinaryResponse.public_id,
    imgUrl : cloudinaryResponse.secure_url
  })

  res.redirect('/login')
})


// login logic
app.post('/login' , async (req,res) => {
    const {email,password} = req.body;

    // check karo ki user exist bhi karta h ya nahi
    let user = await User.findOne({email})
    if(!user){
        res.render('login.ejs')
    }
    else if(user.password != password){
        res.render('login.ejs')
    }
    else{
        res.render('profile.ejs', {user})
    }
})


const port = 2000;
app.listen(port , () => console.log(`Server is running at port ${port}`))