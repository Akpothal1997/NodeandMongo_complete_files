const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let url = req.url;
    console.log(url);
    fs.readFile(path.join(__dirname, 'index.html'),'utf8',(err,data) => {
        if(err){
            throw  err;
        }
        res.end(data);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});