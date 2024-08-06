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
/*
let dayoff = 'Sunday';

switch(dayoff) {
    case 'Saturday':
        console.log('Go hiking.');
        break;
    
    case 'Sunday':
        console.log('Read a book.');
        break;
    
    default:
        console.log('Work on a hobby.');
    
}
*/
// Self check quiz
// A simple quiz that evaluates answers using if-else statements:
/*
let answer: string = 'correct';

if(answer === 'correct') {
    console.log('You got it right!');
    
}
else {
    console.log("Sorry, that's not correct.");
    
}
*/
// Evaluating a number game
// A simple game where a user gausses if a number a high, low or eqaul to 
// a target number.
/*
let guess: number = 7;
let target: number = 5;

if(guess < target) {
    console.log('You guess too low.');
    
}
else if(guess > target) {
    console.log('You guess too high.');
    
}
else {
    console.log('You guessed correctly!');
    
}
*/
// Frient Checker Game
// A game to check if someone is a friend based on their name
let isFriend = 'Usama';
if (isFriend === 'Usama') {
    console.log(`${isFriend} is your friend.`);
}
else {
    console.log(`${isFriend} is not your friend.`);
}
