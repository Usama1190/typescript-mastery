// TypeScript Tuples
/*
let coffeeOrder: [string, string] = ['Cappuccino', 'Medium'];
//                             Tuple: [coffee type  , size]
console.log(coffeeOrder);
*/
// TypeScript Enums
/*
enum CoffeeType {
    Expresso,
    Latte,
    Cappuccino,
    Americano
}

let myCoffee: CoffeeType = CoffeeType.Latte;
console.log(myCoffee);
*/
// TypeScript While Loop
/*
let minutesUntilBusArrives: number = 5;

while (minutesUntilBusArrives > 0) {
    console.log(`Bus arrives in ${minutesUntilBusArrives} minutes.`);
    minutesUntilBusArrives--;
}
*/
// TypeScript Do While Loop
// let minutesUntilBusArrives: number = 5;
// do {
//     console.log('Checking for the bus...');
//     /* Assume checkBusArrival() decreases minutesUntilBusArrives and returns
//     false when the bus arrives */
// } while (minutesUntilBusArrives> 0);
// let minutesUntilBusArrives: number = 5;
// do {
//     console.log('Checking for the bus...');
//     minutesUntilBusArrives--;
//     /* Assume checkBusArrival() decreases minutesUntilBusArrives and returns
//     false when the bus arrives */
// } while (minutesUntilBusArrives> 0);
// let minutesUntilBusArrives: number = 5;
// function checkBusArrival() {
//     minutesUntilBusArrives--;
//     if (minutesUntilBusArrives != 0) {
//         return 'Checking for the bus...';
//     }
//     else {
//         return false;
//     }
// }
// do {
//     let response = checkBusArrival();
//     console.log(response);
//     /* Assume checkBusArrival() decreases minutesUntilBusArrives and returns
//     false when the bus arrives */
// } while (minutesUntilBusArrives> 0);
// TypeScript For Loop
/*
for (let i = 0; i < 5; i++) {
    console.log(`Watering plant ${i + 1}`);
    
}
*/
// For-In Loop
/*
let person: any = { name: 'Alice', age: 30, city: 'Wonderland' };

for(let key in person) {
    console.log(`${key}: ${person[key]}`);
    
}
*/
// For-Of Loop
let flavours = ['Vanilla', 'Chocolate', 'Staubrary', 'Mint'];
for (let flavour of flavours) {
    console.log(flavour);
}
export {};
