const fs = require('fs');
const path = require('path');

let storeMessage = (message) => {
    fs.writeFile(path.join(__dirname,'greet.txt'),message , 'utf8' , (err) => {
        if(err){
            throw err;
        }
        console.log('Data is Stored');
    });
};

// store phones in a file
let storePhones = (phones) => {
    fs.writeFile(path.join(__dirname,'phones.txt'), phones , 'utf8' , (err) => {
        if(err){
            throw err;
        }
        console.log('Phones are Stored');
    });
};

module.exports = {
    storeMessage,
    storePhones
};