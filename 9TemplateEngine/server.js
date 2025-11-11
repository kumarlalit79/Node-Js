import express from 'express'

const app = express()

const fruits = [
    {name : "Apple",price : 100},
    {name : "Banana",price : 65},
    {name : "Litchi",price : 50}
]

app.get('/' , (req , res) => {
    let name = 'lalit'
    res.render('index.ejs' , {name , fruits})
})

const port = 2000

app.listen(port , () => console.log(`Server is running at port ${port}`))