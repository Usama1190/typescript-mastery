"use strict";
// TypeScript Logic Statements
Object.defineProperty(exports, "__esModule", { value: true });
// if and if-else statements
/*
let isRaining = true;

if(isRaining) {
    console.log('Wear raincoat.');
    
}
else {
    console.log('Wear sunglasses.');
    
}
*/
/*
let isRaining = false;

if(isRaining) {
    console.log('Wear raincoat.');
    
}
else {
    console.log('Wear sunglasses.');
    
}
*/
// Else-if Statements
/*
let weather = 'cloudy';

if(weather === 'rainning') {
    console.log('Wear raincoat.');
    
}
else if(weather === 'cloudy') {
    console.log('Wear light jacket.');
    
}
else {
    console.log('Wear sunglasses.');
    
}
*/
// Conditional Ternary Operators
/*
let isHungry = true;
let snack = isHungry? 'apple': 'water';

console.log(`You should have some ${snack}.`);
*/
/*
let isHungry = false;
let snack = isHungry? 'apple': 'water';

console.log(`You should have some ${snack}.`);
*/
// Switch Statements
let dayoff = 'Sunday';
switch (dayoff) {
    case 'Saturday':
        console.log('Go hiking.');
        break;
    case 'Sunday':
        console.log('Read a book.');
        break;
    default:
        console.log('Work on a hobby.');
}
