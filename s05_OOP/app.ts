// Topic : Object Oriented Programming ( OOP )               June 22 , 24


// Object based programming , clean efficient code

// 1. Objects         2. Class  ( blue print )

/*
class House {
    ownerName: string = 'Usama';
    address: string = 'A123';
    numberOfDoors: number = 2;
}

let h1 = new House();                 // Promise => class
 
console.log(h1);
console.log(h1.address);
console.log(h1['address']);


let h2 = new House();
let h3 = new House();
*/

/*
class House {
    ownerName: string = 'usama';
    address:string = 'A123';

    constructor() {}
}
*/

/*
class House {
    ownerName: string;
    // address:string;

    constructor(name: string) {
        this.ownerName = name;
    }
}

let h1 = new House('usama');

console.log(h1);
*/

/*
class House {
    ownerName: string;
    address:string;

    constructor(name: string, ads: string) {
        this.ownerName = name;
        this.address = ads;
    }
}

let h1 = new House('usama', 'A345');

console.log(h1);
*/

// prototypes home work

/*
class House {
    ownerName: string;
    readonly address:string;

    constructor(name: string, ads: string) {
        this.ownerName = name;
        this.address = ads;
    }
}

let h1 = new House('usama', 'A123');

console.log(h1);
*/

// Objects have two main things properties and methods

/*
class House {
    ownerName: string;
    readonly address:string;
    bell() {
        console.log('Ding Dong');
        
    }

    constructor(name: string, ads: string) {
        this.ownerName = name;
        this.address = ads;
    }
}

let h1 = new House('usama', 'A123');
h1.bell();

console.log(h1);
*/


// Four principals or rules in OOP 
// 1. Encapsulation      2. Polymorphism         3. Inheritance
// 4. Abstraction


/*
class Animal {
    name: string;
    eat() {
        console.log('Eaten!');
        
    }

    constructor(name: string) {
        this.name = name;
    }
}
*/

/*
class Cat extends Animal{
    meow() {
        console.log('Meow meow!!');
        
    }
}
*/

/*
class Cat extends Animal{
    eyeColor: string;

    constructor(name: string, color: string) {
        super(name);
        this.eyeColor = color;
    }
}
*/

// let myCat1 = new Cat('Bublo', 'pink');

// myCat1.eat();
// myCat1.meow();

// console.log(myCat1);


// class ko used karte hue object or instance banao

// let h2 = new Cat('Tuk tuk');

// console.log(h2);



// Assignment : University Management System           Excalidraw