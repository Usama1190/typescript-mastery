// TypeScript Questions


Home Work Assignments

1. Basic Function Creation
Create a function named calculateProduct, that takes two parameters, multiplies them together and returns the result.

const result = calculateProduct(5, 10);
console.log(result);        // Should print 50




2. Using Default Parameters
Define a function greet that takes two parameters: name and greeting, where greeting has a default value of "Hello". The function should return a greeting message.

console.log('Usama');    // Should print "Hello Usama!"

console.log('Hi', 'Usama');    // Should print "Hi, Usama!"





3. Arrow Function Conversion
Convert the following traditional function into an arrow function

function add(a: number, b: number): number {
    return a + b;
}





4. Implementing a Rest Parameter
Write a function sumAll that uses a rest parameter to take any number of arguments and return their sum.

console.log(1, 2, 3);    // Should print 6
console.log(10, 20, 30, 40, 50);    // Should print 150





5. Function Returning Another Function
Create a function multiplier that takes a number as its argument and return another function. The returned function should take a single number as its argument and return the product of its argument and the argument of the first function

const triple = multiplier(3);
console.log(triple(5));      // Should print 15





6. Recursive Function - Factorial
Write a recursive function to calculate the factorial of a number. The factorial of a number n is a product of all positive integers less than and eqaul to n. For example the factorial of 5 (5!) is 5*4*3*2*1 = 120

console.log(factorial(5));    // Should print 120