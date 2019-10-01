const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// for normal HTML Tag
app.get('/',(req,res) => {
    res.send('<h2 style="color: blueviolet">Welcome to Express JS</h2>');
});

// for the complete HTML File
app.get('/home',(req , res) => {
    res.sendFile(path.join(__dirname , 'index.html'));
});

// for the json data
app.get('/json',(req,res) => {
    let employees = [
        {
            name : 'Rajan',
            age  : 23,
            designation : 'Software Engineer',
            active : true
        },
        {
            name : 'Mahesh',
            age  : 32,
            designation : 'Tech Lead',
            active : false
        }
    ];
    res.json(employees);
});

// download a file from the server
app.get('/download', (req,res) => {
    res.download(path.join(__dirname,'ui_development.pptx'))
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

