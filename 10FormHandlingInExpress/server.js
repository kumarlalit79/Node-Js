import express from 'express'

const app = express();

app.use(express.urlencoded({
    extended:true
}))

app.get('/' , (req , res) => {
    res.render('index.ejs')
})

// ->  /form-submit : ye route hota hai, form submit hone ke baad yaha jayega. ye form-submit html page mai form ke action tag mai pass karenge. like .net mai action method ka naam pass krte the
app.post('/form-submit' , (req , res) => { 
    
    console.log(req.body)
    // yaha DB mai save krne ka code hota hai, pr abhi ke liye db mai save nahi kar re
    res.json({
        msg : "Record saved!",
        success : true
    })
})

const port = 2000;
app.listen(port , () => console.log(`Server is running on port ${port}`));