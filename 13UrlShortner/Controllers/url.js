import { Url } from "../Models/Url.js"
import shortid from "shortid";

export const shortUrl = async (req,res) => {
    const longUrl = req.body.longUrl; // long url schema se nikaala hai
    const shortCode = shortid.generate();
    
    const shortUrl = `http://localhost:2000/${shortCode}`

    // save to database
    const newUrl = new Url({
        shortCode,
        longUrl
    })
    await newUrl.save();

    console.log("Short url saved : " , newUrl);
    
    res.render("index.ejs" , {shortUrl})
}

export const getOriginalUrl = async(req,res) => {
    const shortCode = req.params.shortCode;

    const originalUrl = await Url.findOne({shortCode})

    if (originalUrl) {
        res.redirect(originalUrl.longUrl);
    }

    res.json({
        msg:"longUrl",
        shortCode:shortCode
    });
}