// Topic any , unknown , explicit typecasting , rest parameter    May 25 , 24
// and function overloading 

// any
// let age: any;

// age = 18;        // '18' or true or [] or {} no error

// age.xyz.usama;   // no error

// unknown
// let age: unknown;

// age = true;

// age.xyz.usama;    // error data type any

// first we known the data type than use

// example
// let price = 18;

// use number method toFixed()

// console.log(price.toFixed(2));


// explicit type casting
// let age: unknown;

// age = 18;

// age as number;     // explicit type casting

// let newAge = age as number;

// console.log(newAge.toFixed(2));

// console.log( (age as number).toFixed(2) );

// explicit type casting age ko number me convert karega  (age as number)

// (age as number)                // method 01

// let newAge = age as number;    // method 02 create a variable

// (<number>age).toFixed(2);         // method 03


// revision function
// function sum(a: number, b: number): number {
//     return a + b;
// }

// let mySum = sum(23, 25);

// console.log(mySum);

// In this case function return a number than type of function is number

// if function does not return a value than the type of function is void


// rest parameter

// function sum(...usama: number[]) {
//     let myNum = 0;

//     for(let i = 0; i < usama.length; i++) {
//         myNum += usama[i];
//     }
    
//     return myNum;
// }

// let mySum = sum(13, 23, 53, 11);

// console.log(mySum);


// function overloading
// function add(arg1: number, arg2: number): number 
// function add(arg1: string, arg2: string): string
// function add(arg1: boolean, arg2: boolean): boolean

// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }

// add(2, 3);         // argument accepted, number to number
// add('2', '3');     // argument accepted, string to string
// add(true, false);  // argument accepted, boolean to boolean

// add('2', 3);          // argument regected, string to boolean
// add(3, '3');          // argument rejected, number to string
// add(true, 2);         // argument rejected, boolean to number


// function add(arg1: string, arg2: number): string    // concatenation 
// function add(arg1: number, arg2: string): string    // concatenation
// function add(arg1: number, arg2: boolean): boolean  // boolean

// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }

// add('2', 4);      // argument accepted, string to number
// add(3, '1');      // argument accepted, number to string
// add(3, true);     // argument accepted, number to boolean


// home work : create login function that accepts two overloads
// first overload accept email or password both
// second overload accept email

// function login(email: string, password: string): string;
// function login(email: string): string;

// function login(email: any, password?: any): any {
//     return 'welcome you are logged in!';
// }

// let user = login('usama@gmail.com', 'dshfjh');

// console.log(user);