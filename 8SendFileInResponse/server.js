import express from 'express'
import path from 'path'

const app = express();

const fruits = [
    {
        name : "Apple",
        price : 100
    },
    {
        name : "Banana",
        price : 50
    },
    {
        name : "Mango",
        price : 20
    }
]

// sending response in JSON
// app.get('/' , (req , res) => {
//     res.json({
//         msg : "Successfully fetched all fruits",
//         fruitsDetails : fruits,
//         success : true
//     });
// })  

// // sending response in HTML
// app.get('/' , (req , res) => {
//     res.send("<h1>Hello</h1>")
// })  


// sending response in HTML file
app.get("/" , (req , res) => {

    const dir = path.resolve(); // yaha se path mil jayega

    const url = path.join(dir , './index.html'); // path ko file ke sath join krdo

    console.log("Full path = " , url);

    const name = "Lalit";

    res.sendFile(url)
})


const port = 2000;

app.listen(port , () => console.log(`Server is running on port ${port}`))