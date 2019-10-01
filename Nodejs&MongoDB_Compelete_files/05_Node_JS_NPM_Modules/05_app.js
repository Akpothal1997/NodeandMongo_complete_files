// Load lodash module
const _ = require('lodash');
let moment = require('moment');

// Normal Way
let colors = ['white','black','blue','orange','red'];
let result = '';
colors.forEach(function(color) {
    result += `${color.toUpperCase()} `;
});
console.log(result);

// Lodash Way
result = '';
_.forEach(colors , function(color) {
    result += `${color.toUpperCase()} `;
});
console.log(result);

// Example 2 :
let array = [100,'test',200,'abc',300,true];
let countArray = (array) => {
    let stringCount = 0;
    let numberCount = 0;
    for(let elem of array){
        if(typeof elem === 'number'){
            numberCount++;
        }
        if(typeof elem === 'string'){
            stringCount++;
        }
    }
    return { stringCount : stringCount , numberCount : numberCount};
};
console.log(countArray(array));

// Lodash way
let countLodash = (array) => {
    let stringCount = 0;
    let numberCount = 0;
    _.forEach(array, function(elem) {
        _.isNumber(elem) ? numberCount++ : numberCount;
        _.isString(elem) ? stringCount++ : stringCount;
    });
    return { stringCount : stringCount , numberCount : numberCount};
};
console.log(countLodash(array));

// Moment JS Module
let val = moment().format('MMMM Do YYYY, h:mm:ss a');
val = moment().format('dddd');
val = moment().format("MMM Do YY");
val = moment("20110101", "YYYYMMDD").fromNow();
val = moment().startOf('day').fromNow();
moment.locale('hi');
val = moment().add(3, 'days').calendar();
console.log(val);