// OS Module
const os = require('os');
const fs = require('fs');
const path = require('path');

// Total Memory
let totalMemory = os.totalmem();
console.log(`Total Memory : ${totalMemory}`);

// Free Memory
let freeMemory = os.freemem();
console.log(`Free Memory : ${freeMemory}`);

// Computer Name / Host Name
let hostName = os.hostname();
console.log(`Host Name : ${hostName}`);

// Home Dir
let homeDir = os.homedir();
console.log(`Home Dir : ${homeDir}`);

// System User
let userName = os.userInfo().username;
console.log(`User Name : ${userName}`);

// Write File
let data = 'This article is about a programming language. For the software platform, see Java (software platform). For the software package downloaded from java.com, see Java Platform, Standard Edition.\n' +
    'Not to be confused with JavaScript.';
fs.writeFile('message.txt',data,'utf8',(err) => {
    if(err){
        throw  err;
    }
    console.log('data saved');
});

// Read file
fs.readFile('message.txt','utf8',(err,data) => {
    if(err){
        throw  err;
    }
    console.log(data);
});

// Read and Write
fs.readFile('03_app.js', 'utf8', (err,data) => {
    if(err){
        throw  err;
    }
    fs.writeFile('program.txt',data,'utf8',(err) => {
        if(err){
            throw  err;
        }
        console.log('data is saved');
    })
});


// Existing global variables for path
console.log(`Dir Name : ${__dirname}`);
console.log(`File Name : ${__filename}`);

//
fs.readFile('03_app.js', 'utf8', (err,data) => {
    if(err){
        throw  err;
    }
    fs.writeFile(path.join(__dirname, 'data', 'app', 'code.txt'),data,'utf8',(err) => {
        if(err){
            throw  err;
        }
        console.log('data is saved');
    })
});
