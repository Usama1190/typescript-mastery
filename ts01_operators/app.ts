// Operators In TypeScript



// Addition +
/*
let num1: number = 2;
let num2: number = 3;

let cart: number = num1 + num2;
console.log(cart);                // 5
*/





// Subtraction -
/*
let cart: number = 5;
let num3: number = 2;

let total: number = cart - num3;
console.log(total);                 // 3
*/





// Multiplication * 
/*
console.log(4 * 5);

let bags: number = 4;
let apples: number = 5;

let totalApples: number = bags * apples;
console.log(totalApples);                 // 20
*/





// Division /
/*
console.log(20 / 4);

let totalApples: number = 20;
let bags: number = 4;

let eachBag: number = totalApples / bags;
console.log(eachBag);                         // 5
*/





// Exponentiation **
/*
console.log(5 ** 2);

let layer: number = 5;
let apple: number = 5;

let power: number = layer ** 2;
console.log(power);               // 25
*/





// Modulus %
/*
console.log(5 % 2);

let apples: number = 5;
let bags: number = 2;

let remainder: number = apples % bags;
console.log(remainder);                // 1
*/





// Unary Operators    (++) (--)
/*
let a = 5;
let b = 2;

a++;    // a becomes 6
b--;    // b becomes 1
*/

/*
let a = 5;
let b = 2;

++a;    // a becomes 6
--b;    // b becomes 1
*/




// Home Work
/*
let a: number = 5;
let b: number = 2;
let c: number;

//   6  +  6 => 7  +  1  +  0  + 7 +  1  + 1   
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);    // 23      correct answer: 22
*/





// Combining Operators
/*
let result = 3 + 4 * 5;
console.log(result);
// Answer will be 23 or 35 or ??
*/


/*
let result = 3 + 4 * 5;
result++;
console.log(result);
// Answer will be 23 or 24 or 35 or 36 or ??
*/





// Addition Calculator   (assignments)
// BMI Calculator
/*
let weightInKg = 70;         // 70kg
let heightInMeter = 1.75;    // 1.75m

let bmi = weightInKg / (heightInMeter * heightInMeter);
console.log(`Your bmi is ${bmi}`);
*/




/* Home Work: Create Addition, Subtraction, Multiplication, Division, 
Exponentiation, Modulus and BMI Calculator using inquirer */




// Asssignment Operators   (=)
/*
let c = 10;
c += 5;
*/
// equivalent to c = c + 5, c is now 15





// Comparision Operators
/*
let a = 5;
let b = 2;

let isEqual = (a == b);           // false
let isNotEqual = (a != b);        // true
let isGreaterThan = (a > b);      // true
let isLessThan = (a < b);         // false
*/





// Logical Operators
/*
let a = 5;
let b = 2;

let logicalAnd = (a > 0) && (b > 0);       // true
let logicalOr = (a < 0) || (b > 0);        // true
let logicalNot = !(a > 0);                 // false
*/