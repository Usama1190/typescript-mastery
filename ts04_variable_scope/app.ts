// Variable Scope
// Global Variables
// Local Variables

/*
let globalVar = 'Accessible everywhere';

function showExample() {
    let localVar = 'Accessible only inside this function';
    console.log(globalVar);  // Works
    
}
*/
// console.log(localVar);   // Error: localVar is not defined
// Error: Cannot find name 'localVar'. Did you mean 'globalVar'?






// Hoisting
// Hoisting with let and const
// https://www.freecodecamp.org/news/javascript-let-and-const-hoisting

/*
console.log(number);
// undefined

var number = 12;

console.log(number);
// 12
*/

/*
console.log(number);

let number = 12;
// or const number1 = 12;

console.log(number);
*/

/*
console.log(number2);

let number = 12;
*/


/*
console.log(number);
// ReferenceError: Cannot access number 'before' initialization

let number = 12

console.log(number);
*/


// Temporal Dead Zone
/*
console.log(number);

let number = 12;

console.log(number);
*/