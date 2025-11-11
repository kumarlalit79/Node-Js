import http from 'http'

const server = http.createServer((req,res) => {
    // res.end('<h1>Your requested has been accepted</h1>')

    // console.log(req); // kis browser se req aari ye batayega
    // console.log(req.url); // kya url ban raha hai ye batayega

    if(req.url === '/'){
        res.end("Welcome to home page")
    }
    else if (req.url === '/apple') {
        res.end("This is apples image")
    }
    else if(req.url === '/lucky'){
        res.end("He is a billionaire")
    }
    else {
        res.end('404 Not Found');
    }

})

const port = 1000
server.listen(port, () => console.log(`Server is running on port no ${port}`));
