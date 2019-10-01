// import database file
let db = require('../data/database');

let greet = (name) => {
    let message = `Welcome to NODE JS ${name}`;
    db.storeMessage(message);
};

// Generate Random Phone Numbers
let randomPhones = () => {
    let phones = [];
    let startNumber = '9844';
    for(let i=0; i<=1000000; i++){
        let randomNumber = Math.floor(Math.random() * 1000000);
        let phoneNumber = startNumber + randomNumber;
        if(phoneNumber.length === 10){
            phones.push(phoneNumber);
        }
    }
    return phones;
};

// Export the Functions
module.exports = {
    greet,
    randomPhones
};