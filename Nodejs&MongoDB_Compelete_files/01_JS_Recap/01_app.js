// Object
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    college : 'Osmania University'
};
console.log(student);

// Arrow Function
let sum = (a , b) => {
    return a + b;
};
console.log(`The Sum of a , b is : ${sum(10, 20)}`);

// Array
let colors = ['white','black','orange','blue','red'];

// Normal For Loop
let result = '';
for(let i = 0; i< colors.length; i++){
    result += `${colors[i].toUpperCase()} `;
}
console.log(result);

// for-in loop
result = '';
for(let index in colors){
    result += `${colors[index].toUpperCase()} `;
}
console.log(result);

// for-of loop
result = '';
for(let color of colors){
    result += `${color.toUpperCase()} `;
}
console.log(result);

// forEach Function
result = '';
colors.forEach(function(color) {
    result += `${color.toUpperCase()} `;
});
console.log(result);

// forEach with Arrow
result = '';
colors.forEach((color) => {
    result += `${color.toUpperCase()} `;
});
console.log(result);
