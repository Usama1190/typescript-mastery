// Saturday                                        July 07, 2024
// Topic : Logic building
// Warmup : 1. Create a function sum()       2. it accepts two parameters
//  3. add and return the answer    4. Print the answer outside the function
/*
const sum = (num1: number, num2: number) => {
    return num1 + num2;
}

const answer = sum(8, 8);

console.log(answer);
*/
/*
const sum = (num1: number, num2: number) => {
    return num1 + num2;
}

const answer = sum(5, 5);

console.log(answer);
*/
// q1 : Write a function checkEvenOdd that accepts a number and prints 
//      whether it is even or odd.
/*
let checkEvenOdd = (num: number) => {
    if(num % 2 === 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}

checkEvenOdd(4);
*/
// q3 : Write a function arrayOperations that creates an array of numbers
//      [4, 8, 6, 12, 28] , adds a number to the end of the array, removes 
//      the first number and removes the middle number i.e: 6
var arrayOperations = function () {
    var myArr = [4, 8, 6, 12, 28];
    myArr.push(5); // [4, 8, 6, 12, 28, 5]
    myArr.shift(); // [8, 6, 12, 28, 5]
    myArr.splice(1, 1); // [8, 12, 28, 5]
    console.log(myArr);
};
arrayOperations();
