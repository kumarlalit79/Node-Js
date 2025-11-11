import http from 'http'

const server = http.createServer((req, res) => {
    res.end("Your requested for something");
});
const port = 3000;
server.listen(port, () => console.log(`Server is running on port no ${port}`));
