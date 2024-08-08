// TypeScript Home Work Assignments
// 1. Basic Function Creation
/*
function calculateProduct(a: number, b: number): number {
    return a * b;
}

let result = calculateProduct(5, 10);
console.log(result);      // Should print 50
*/
// 2. Using Default Parameters
/*
function greet(name: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${name}!`;
}

console.log(greet('Usama'));          // Should print "Hello, Usama!""
console.log(greet('Usama', 'Hi'));    // Should print "Hi, Usama!""
*/
// 3. Arrow Function Conversion
/*
function add(a: number, b: number): number {
    return a + b;
}
*/
/*
let add = (a: number, b: number): number => a + b;
console.log(add(12, 23));
*/
// 4. Implementing a Rest Parameter
/*
function usama(...rest: number[]) {
    let usama = rest.reduce((a: number, b: number) => a + b);

    console.log(usama);
    
}

usama(1, 2, 3);
*/
// 5. Function Returning Another Function
/*
function hiUsama(first: number) {
    let num1 = first;
    function anotherFunc(second: number) {
        let num2 = second;
        let multiplier = num1 * num2;
        return multiplier;
        
    }
    return anotherFunc;
}

let myVar = hiUsama(2);
console.log(myVar(2));
*/
/*
function multiplier(arg1: number) {
    function returnFunc(arg2: number) {
        return arg1 * arg2;
    }

    return returnFunc;
}

const triple = multiplier(12);
console.log(triple(2));
*/
// 6. Recursive Function - Factorial
function factorial(n) {
    if (n <= 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
const result = factorial(5);
console.log(result);
export {};
