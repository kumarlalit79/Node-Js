import express from "express"
import mongoose from "mongoose";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary'
import path from 'path'


const app = express();

cloudinary.config({ 
  cloud_name: 'dr3yyh78j', 
  api_key: '451433846639675', 
  api_secret: 'zMA-pP8AmEt-90bPQOvSs02zJ_A'
});



mongoose.connect("mongodb+srv://luckyarya0101_db_user:ZJcto5ONGZHidEiL@cluster0.wwo1jq6.mongodb.net/" , {
    dbName:"Nodejs_Learning"
}).then(() => console.log("Connected")).catch((err) => console.log(err))

// rendering ejs file
app.get('/' , (req,res) =>{
    res.render('index.ejs' , {url:null});
});

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname); // yaha extension nikaal liya
    cb(null, file.fieldname + "-" + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const imageSchema = new mongoose.Schema({
    filename : String,
    public_id : String,
    imgUrl : String
    // ye 2 wo hi hai jo cloudnary ke url mai dikha tha.
})
const File = mongoose.model("cloudinary" , imageSchema);


app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file.path; // is line se file ke naam ka complete path aa jayega

  const cloudinaryResponse = await cloudinary.uploader.upload(file,{
    folder:"NodeJs_Learning"
  })

  // ab database mai save karlo
  const db = await File.create({
    filename : file.originalname, 
    public_id : cloudinaryResponse.public_id,
    imgUrl : cloudinaryResponse.secure_url
  })

  res.render('index.ejs',{
    url:cloudinaryResponse.secure_url
  })

//   res.json({
//     message:'file uploaded',
//     cloudinaryResponse
//   })
})

const port = 2000;
app.listen(port , () => console.log(`Server is running at port ${port}`))