// Basic Functions
/*
function halfFryEgg() {
    let cocked = 1 + 1.5 + 2;
    // Egg + Butter + Salt
    console.log(cocked);
    
}

halfFryEgg();      // Invoking the function
*/
// Returning function values
/*
function halfFryEgg(): number {
    let cocked = 1 + 1.5 + 2;
    // Egg + Butter + Salt
    return cocked;
}

let responce: number = halfFryEgg();
console.log(responce);
*/
// Parameters and Arguments
/*
function halfFryEgg(egg: number, butter: number, salt: number): number {
    return egg + butter + salt;
}

let responce: number = halfFryEgg(1, 1.5, 2);
console.log(responce);
*/
/*
function addNumbers(a: number, b: number) {
    return a + b;
}

let responce: number = addNumbers(12, 23);   // Invoking the numbers
console.log(responce);
*/
/*
function calculateArea(width: number, height: number): number {
    return width * height;
}

let responce = calculateArea(50, 50);     // Invoking the function
console.log(responce);
*/
// Default Parameters
/*
function halfFryEgg(egg: number = 1, butter: number = 1.5, salt: number = 2): number {
    return egg + butter + salt;
}

let responce: number = halfFryEgg();
console.log(responce);
*/
/*
function halfFryEgg(egg: number = 1, butter: number = 1.5, salt: number = 2): number {
    return egg + butter + salt;
}

let responce: number = halfFryEgg(2, 2.5, 3);
console.log(responce);
*/
// Rest Parameters
/*
function halfFryEgg(egg: number, ...ingredients: number[]) {
    console.log(egg);
    console.log(ingredients);
    
}

halfFryEgg(1, 1.5, 2, 5);
*/
// Spread Operators
/*
function halfFryEgg(egg: number, ...ingredients: number[]) {
    console.log(egg);
    console.log(...ingredients);
}

halfFryEgg(2, 1, 2.5, 5);
*/
// What happens if I call function twice
// Arrow Functions
/*
let halfFryEgg = () => 1 + 1.5 + 3;
//                    Egg + Butter + Salt

let responce: number = halfFryEgg();
console.log(responce);
*/
/*
let halfFryEgg = (egg: number, butter: number, salt: number): number => (
    egg + butter + salt
);

let responce: number = halfFryEgg(1, 1.5, 2);
console.log(responce);
*/
/*
let halfFryEgg = () => { return 1 + 1.5 + 2 };
//                            Egg + butter + salt

let responce: number = halfFryEgg();
console.log(responce);
*/
/*
let halfFryEgg = () => {
    //          egg + butter + salt
    let cocked = 1 + 1.5 + 2;

    return cocked;
}

let responce: number = halfFryEgg();
console.log(responce);
*/
let halfFryEgg = (egg, butter, salt) => {
    let cocked = egg + butter + salt;
    return cocked;
};
let responce = halfFryEgg(1, 1.5, 4);
console.log(responce);
export {};
