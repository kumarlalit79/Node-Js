import express from 'express'

const server = express();

server.get('/' , (req , res) => {
    res.send("You are requested for home route");
})

server.get('/lucky' , (req , res) => {
    res.send("You are a lucky person");
})

const port = 2000;
server.listen(port , () => console.log(`Server is running on port ${port}`));
 