// Topic toFixed , toUpperCase , toLowerCase , slice ,        June 1 , 24
// current topic narrowing , typeof , Math.random , 
// interface , Structural Typeing , stale objects and fresh objects

// let a = 18.5;

// a.toFixed(2);

// console.log(a);

// let num = a.toFixed(2);

// console.log(num);


// let a = '18.5';

// a.toFixed(2);    // error b/c toFixed() method for number not for string


// let a = 'Usama';

// let b = a.toUpperCase();

// console.log(b);

// let b = a.toLowerCase();

// console.log(b);


// for title case

// let titleCase = a[0].toUpperCase() + a.slice(1);

// console.log(titleCase);



// Narrowing

// let a: string | number;

// // a.            ( show common methods )

// a = 10;          // Narrowing process. Original datatype is not change

// a.toFixed(2);    // show number methods

// a = 'Usama';     // no error b/c both data type is accepted

// // a.toFixed(2); // throw error b/c this time a will be string and toFixed is number method

// a.toUpperCase(); // show string methods

// a = 10;          // Narrowing process

// a.toUpperCase()   // throw error b/c toUpperCase() is string method

// Narrwoing is basically for TypeScript

// Home Work   ( Asynchronous JavaScript )

// a = 10;

// number

// number

// number


// a = 'Usama';

// string

// string

// string


// typeof function

// let num1 = 18;

// console.log(typeof num1);     // number

// let num1 = '18';

// console.log(typeof num1);        // string


// let num1 = true;

//           'boolean' == 'boolean'         true

// console.log(typeof num1 == 'boolean');    // true


// let num1 = 18;

//           'number' == 'boolean'       false

// console.log(typeof num1 == 'boolean');    // false


// let num1 = 18;

//          'number' == 'number'        true

// console.log(typeof num1 == 'number');     // true


// (typeof num1 == 'number') this is type card

// window + dot open emogis popup


// Math.random()     ( generate random number range 0.00000... to 0.99999... )

// console.log(Math.random());

// let random = Math.random();

// console.log(random);

// let a = random > 0.6 ? 'Usama' : 16;   // ternary operator most used operator

// console.log(a);

// console.log(`My random no is ${a}`);       // template literals

// a ( data type is union , string or number )

// if( typeof a == 'string' ) {                 // (typeof a == 'string') Typecard
//     console.log('Narrowing to string!');
    
// }
// else {
//     console.log('Narrowing to number!');
    
// }

// let random = Math.random();

// let a = random > 0.6 ? 'Usama' : random > 0.8 ? 'Hamza' : 16

// console.log(a);


// null 

// let age: null | number = null;           // put intensionally null

// let salary: null | number = null;


// Structural Typing     step 05c

// interface         ( use to make object type )

// interface User {               // interface syntax
//     name: string,
//     age: number,
//     address: {
//         city: string,
//         state: string
//     }
// }


// type User = {              // type alias syntax
//     name: string,
//     age: number,
//     address: {
//         city: string,
//         state: string
//     }
// }


// difference between interface and type alias

// interface type for usually using to objects and some time to function

// type alias make type for multiple data type 


// interface Address {
//     city: string,
//     state: string
// }

// interface User {
//     name: string,
//     age: number,
//     address: Address
// }

// let User1: User = {
//     name: 'Usama',
//     age: 20,
//     address: {
//         city: 'Karchi',
//         state: 'Sindh'
//     }
// }

// make interface I choose car

// interface Brand {
//     name: string,
//     register: boolean
// }

// interface Model {
//     name: string,
//     year: number
// }

// interface Car {
//     color: string,
//     brand: Brand,
//     model: Model
// }

// let myCar: Car = {
//     color: 'White',
//     brand: {
//         name: 'Volvo',
//         register: true
//     },
//     model: {
//         name: 'XC60',
//         year: 2020
//     }
// }


// Structural Typing

// interface Deal1 {
//     food: string
// }

// interface Deal2 {
//     food: string,
//     drink: string
// }

// let usamaOrder: Deal1 = {
//     food: 'biryani'
// }

// let aliOrder: Deal2 = {
//     food: 'biryani',
//     drink: 'ishting'
// }

// structural typing

// let usamaTable: Deal1 = aliOrder;    // no error b/c extra properties are allowed

// let aliTable: Deal2 = usamaOrder  // error b/c missing properties are not allowed

// here you drink make an optional


// stale objects vs fresh objects      // stale means baasi

// let usamaTable: Deal1 = aliOrder;    // here is stale object use 

// let aliTable: Deal2 = {          // here is fresh object use
//     food: 'biryani',
//     drink: 'ishting',
    // salet: true         // extra properties are not allowed in fresh objects
// }

// extra properties are allowed in stale objects
// extra properties are not allowed in fresh objects