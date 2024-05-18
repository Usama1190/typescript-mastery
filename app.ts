// Topic : enum + loop + any + unknown                      MAY 18 , 24

// enum Color {
//     Red,
//     Green,
//     Yellow
// }

// let trafficLight : Color = Color.Green; 

// console.log(Color.Yellow);           // result 2

// console.log(Color[0]);               // result Red

// console.log(Color['Yellow']);        // result 2

// console.log(trafficLight);           // result 1


// initialization enum

// enum Color {
//     Red = 2,
//     Green,
//     Yellow
// }

// console.log(Color.Green);               // result 3

// console.log(Color.Yellow);              // result 4

// console.log(Color.Red);                 // result 2


// enum Color {
//     Red,
//     Green = 2,
//     Yellow
// }

// console.log(Color.Yellow);                // result 3

// console.log(Color.Green);                 // result 2

// console.log(Color.Red);                   // result 0


// real world example

// enum Login {
//     Google,
//     Facebook,
//     Email
// }

// enum are alternate of type literals or union

// enum are used for data type or value


// enum Color {
//     Red,
//     Green,
//     Yellow
// }

// let trafficLight = Color.Red;

// if( trafficLight == Color.Red) {
//     console.log('Please Stop Vehicle!');
    
// }
// else if (trafficLight == Color.Yellow) {
//     console.log('Start the engine and ready for drive');
    
// }
// else if (trafficLight == Color.Green) {
//     console.log('Go!');
    
// }


// Home Work : enum example with switch statements / cases


// loop

// for(let i = 0; i < 100; i++) {
//     console.log('Sorry!');
    
// }


// for (let i = 0; i < 3; i++) {
//     console.log('Sorry!');
    
// }


// for(let i = 0; i < 10; i++) {
//     console.log(i);
    
// }


// for(let i = 10; i > 0; i--) {
//     console.log(i);
    
// }

// let fruits = ['Apple','Mango','Banana'];

// for(let i = 0; i <= 2; i++) {
//     console.log(fruits[1]);
    
// }


// for(let i = 0; i <= 2; i++) {
//     console.log(fruits[i]);
    
// }


// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
    
// }


// Home Work : while loop


// type any

// let age: any;

// age = 1;            // ok

// age = 'John';       // ok

// age = true;         // ok

// age = null          // ok

// age.shfjdfhj;       // ok


// type unknown

// let age: unknown;

// age = 2;               // ok

// age = 'Doe';           // ok

// age = false;           // ok

// age = null;            // ok

// age.sfhdkhfj;          // not ok



















// Book: TypeScript Mastary a step-by-step learning experience
// Variables

// let favoriteColor = "red";
// console.log(favoriteColor);


// Change the value of favoriteColor
// let myColor = "blue";
// console.log(myColor);

// myColor = "green";
// console.log(myColor);


// TypeScript assign types to variables
// let userName: string = "Usama Israr Khan";
// number not assign in type string
// userName = 25;


// basic data types
// let firstName: string = "Usama Israr";   // string
// let age: number = 25;   // number
// let isStudent: boolean = true;   // boolean
// let randomValue: any = "https://www.linkdin.com/in/usamaisrar/"   // any


// commits 
// This is Usama Israr, a DevOps Architect
/* I recommand you use this platform.
You can follow me at "http://linktr.ee/ameenalam"
*/



// let firstName: string = "Usama";
// let secondName: string = "Israr";

// let fullName: string = firstName + " " + secondName;
// console.log(fullName);


// type interface
// strongly type
// let a : string = "Pakistan";
// let b : number = 9;
// let c : boolean = true;

//type interface
// let e = "USA";
// let f = 10.9;
// let g = false;


// let or const
// let currentBalance = 100;   // This value can change
// const accountNumber = "123456789";   //This value remains constant

// currentBalance = 50;   // this is allowed
// accountNumber = "987654321";   // Error: cannot assign to 'accountNumber' because it is a constant


// Errors 
// syntax error
// lett message = "Hello World";   // syntax error
// console.log(message);

// type error
// let message = "Hello World";
// console.loger(message);    // type error

// assignment error
// let message = "Hello World";
// message = 6;                  // assignability error
// console.log(message);


// String concatenation
// let firstName: string = 'Usama';
// let lastName: string = 'Israr';
// let fullName: string = firstName + ' ' + lastName;

// console.log(fullName);


// Templates literals
// let firstName: string = "Usama";
// let lastName: string = "Israr";
// let fullName: string = `${firstName} + ${lastName}`;

// console.log(fullName);


//Operators
// Addition +
// console.log(2 + 3);

// let num1: number = 2;
// let num2: number = 3;
// let card: number = num1 + num2;

// console.log(card);  // 5


// subtraction
// let card: number = 5;
// let num3: number = 2;
// let total: number = card - num3;

// console.log(total);   // 3


// Multiplication
// let bags: number = 4;
// let apples: number = 5;
// let totalApples: number = bags * apples;

// console.log(totalApples);   // 20


// Division
// let totalApples: number = 20;
// let bags: number = 4;
// let eachBag: number = totalApples / bags;

// console.log(eachBag);   // 5


// Exponentiation
// let layer: number = 5;
// let apple: number = 5;
// let power: number = layer ** 2;

// console.log(power);   // 25


// Modulus
// let apple = 5;
// let bags = 2;
// let remainder = apple % bags;

// console.log(remainder);   // 1


// unary operators
// let a: number = 5;
// let b: number = 2;
// let c: number;

//   6  +  7  +  1  + 0   + 7 +  1  + 1
// c = ++a + a++ + --b + b-- + a + b++ + b;
// console.log(c);   // 23 but 22


// combining operators
// let result = 3 + 4 * 5;
// console.log(result);     // 23

// answer will be 23 or 35 or ??

// let result = 3 + 4 * 5;
// result++;
// console.log(result);   // 24

// answer will be 23 or 24 or 35 or 36 or ??




// 16-03-24 class 7
// let userPercentage = 90;

// if (userPercentage > 100 || userPercentage < 0) {
//     console.log("Invalid Percentage");
// }
// else if (userPercentage <= 100 || userPercentage >= 90) {
//     console.log("A+ Grade");
// }
// else if (userPercentage < 90 || userPercentage >= 80) {
//     console.log("A Grade");
// }
// else if (userPercentage < 80 || userPercentage >= 70) {
//     console.log("A- Grade");
// }



