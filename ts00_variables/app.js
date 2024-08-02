"use strict";
/*
console.log('Hello, World!');

let message = 'Hello World';
console.log(message);
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Variable
/*
let favoriteColor = 'blue';
console.log(favoriteColor);
*/
// Redeclaring
/*
favoriteColor = 'green';
console.log(favoriteColor);
*/
// Strong Typing
// let userName: string = 'Usama';
// userName = 24;
// Error: Type 'number' is not assignable to type 'string'.ts(2322)
// Primitive Data Types
/*
let userName: string = 'Usama';      // string
let age: number = 23;                // number
let isStudent: boolean = false;      // boolean
let value: any = '23';               // any
let myVar: undefined = undefined;    // undefined
let myVar2: null = null;             // null
*/
// Comments in Code
// This is Usama Israr, a DevOps Architect.
/* This is a
multiline comment. */
// Type Inference
/*
// strong typed syntax
let a: string = 'Pakistan';
let b: number = 9;
let c: boolean = true;

// type inference
let e = 'usa';
let f = 10.9;
let g = false;
*/
// Variables Advance   (const and let)
/*
let currentBalance = 100;           // This value can change
const accountNumber = '123456789';   // This value remains constant

currentBalance = 50;     // This is allowed  */
// accountNumber = '987654321';
// Error: Cannot assign to 'accountNumber' because it is a constant.ts(2588)
// Errors
// Syntax Error
/*
lett message = 'Hello World';     // syntax error
console.log(message);
*/
// Type Error
/*
let message = 'Hello World';
console.loger(message);           // type error
*/
// Assignability Error
/*
let message = 'Hello World';
message = 6;                  // assignability error
console.log(message);
*/
// String Concatenation
/*
let firstName: string = 'Usama';
let lastName: string = 'Israr';

let fullName: string = firstName + ' ' + lastName;
console.log(fullName);
*/
// Template Literals
let firstName = 'Usama';
let lastName = 'Israr';
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
