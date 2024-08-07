// TypeScript Anonymous Functions
// Anonymous Function
/*
let halfFryEgg = function() {
    let cocked: number = 1 + 1.5 + 2;

    console.log(cocked);
    
}

halfFryEgg();
*/
// Immediately Invoked Function Expression (IIFE)
/*
(function() {
    console.log('Runs immediately.');
    
})();
*/
// Recursive Functions
/*
function countDown(number: number): void {
    if(number <= 0) {
        console.log('Done.');
        return;
    }

    console.log(number);
    
    countDown(number - 1);
}

countDown(5);
*/
/*
function factorial(n: number): number {
    if(n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

let result: number = factorial(5);
console.log(result);
*/
// Nested Functions
function outerFunction() {
    function innerFunction() {
        console.log('Hello from inside.');
    }
    innerFunction();
}
outerFunction();
export {};
