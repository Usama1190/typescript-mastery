// TypeScript Tuples
/*
let coffeeOrder: [string, string] = ['Cappuccino', 'Medium'];
//                             Tuple: [coffee type  , size]
console.log(coffeeOrder);
*/
// TypeScript Enums
var CoffeeType;
(function (CoffeeType) {
    CoffeeType[CoffeeType["Expresso"] = 0] = "Expresso";
    CoffeeType[CoffeeType["Latte"] = 1] = "Latte";
    CoffeeType[CoffeeType["Cappuccino"] = 2] = "Cappuccino";
    CoffeeType[CoffeeType["Americano"] = 3] = "Americano";
})(CoffeeType || (CoffeeType = {}));
let myCoffee = CoffeeType.Latte;
console.log(myCoffee);
export {};
