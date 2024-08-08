// Basic Objects in TypeScript


/*
// Defining a basic object in typescript
let person = {
    name: 'Usama Israr'
};


// Accessing properties of the object
console.log(person.name);     // output: Usama Israr
*/



/*
// Defining a basic object in typescript
let person: { name: string } = {
    name: 'Usama Israr'
};


// Accessing properties of the object
console.log(person.name);     // output: Usama Israr
*/




/*
// Defining a basic object in typescript
let person: { name: string, age: number, address: string } = {
    name: 'Usama Israr',
    age: 23,
    address: '123 ABC Street'
}

// Accessing properties of the object
console.log(person.name);             // ouput: Usama Israr
console.log(person.age);              // output: 23
console.log(person.address);          // 123 ABC Street






// Modifying an Object's Properties
person.age = 18;
console.log(person.age);    // output: 18






// Adding a new property
person.email = 'alice@example.com';
// Property 'email' does not exist on type '{ name: string; age: number; address: string; }'.ts(2339)
*/






// Type Alias in TypeScript
/*
type User = {
    name: string;
    age: number;
    hesPet: boolean;
}

// Now you can use the 'User' type alias to define objects
const user1: User = {
    name: 'Usama Israr',
    age: 23,
    hesPet: true
}
*/






// Another example with a complex type for a function
/*
type Operation = (x: number, y: number) => number;

const add: Operation = (x, y) => x + y;
const sub: Operation = (x, y) => x - y;

console.log(add(2, 3));
console.log(sub(4, 6));
*/







// Type Literal
/*
let drinkSize: 'Small' | 'Medium' | 'Large';
drinkSize = 'Large';    // Valid
drinkSize = 'Medium';   // Valid
*/

// drinkSize = 'Mega';
// Error: Type 
// Type '"Mega"' is not assignable to type '"Small" | "Medium" | "Large"'.ts(2322)






// Type Union
/*
let mixBag: string | number;

mixBag = 'Sunscreen';  // OK
mixBag = 23;  // OK, maybe representing the SPF of the sunscreen
*/
// mixBag = true;
// Error: Type 'boolean' is not assignable to type 'string | number'.ts(2322)





// Type Intersection
/*
type BeachGear = {
    sunscreen: boolean;
    towel: boolean;
}

type MountainGear = {
    waterbottle: boolean;
    map: boolean;
}

type AdventureGear = BeachGear & MountainGear;

let myGear: AdventureGear = {
    sunscreen: true,
    towel: true,
    waterbottle: true,
    map: true
}
*/