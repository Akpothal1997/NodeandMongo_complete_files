// Load custom Modules
const util = require('./application/util');
const db = require('./data/database');

util.greet('John');

// Get random phone numbers
let phones = util.randomPhones();
db.storePhones(phones);