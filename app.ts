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




// Topic Synchoronous and Asynchoronous JavaScript ,         June 08 , 24
//       setTimeout() , callBack function , Promise , await

// Synchoronous JavaScript executes line by line and fast , no wait
/*
console.log("First");

setTimeout( () => {
    console.log("Second");
    
}, 3000);

console.log("Third");
*/

// Asynchronous JavaScript executes parallel programming
/*
console.log("First");

setTimeout( () => {
    console.log("Second");
    
}, 0);

console.log("Third");
*/
/*
console.log("First");

setTimeout( () => {
    console.log("Second");
    
});

console.log("Third");
*/  

/*
function orderPizza() {
    setTimeout( () => {
        return "Order Placed";
    }, 2000);
}

let result = orderPizza();

console.log(result);          // undefined
*/

/*
function orderPizza() {
    setTimeout( () => {
        console.log("Order Placed");
        
    }, 2000);
}

orderPizza();
*/

/*
function orderPizza() {

}

console.log(orderPizza());        // undefined
*/

/*
function preparePizza() {
    setTimeout( () => {
        console.log("Prepared Pizza!");
        
    }, 5000);
}

preparePizza();
*/

/*
function orderPizza( preparePizzaCb: any ) {
    setTimeout( () => {
        console.log("Order Placed");
        preparePizzaCb();
        
    }, 2000);    
}

orderPizza( preparePizza );

function preparePizza() {
    setTimeout( () => {
        console.log("Prepared Pizza!");
        
    }, 5000);
}
*/

/*
type Fn = () => void;

function orderPizza( preparePizzaCb: Fn ) {
    setTimeout( () => {
        console.log("Order Placed");
        preparePizzaCb();
        
    }, 2000);    
}

orderPizza( preparePizza );

function preparePizza() {
    setTimeout( () => {
        console.log("Prepared Pizza!");
        
    }, 5000);
}
*/


// Call back hell  ( function inside function inside function inside... )
//                   Pyramid of dooooom!


// Pormise

/*
function checksMarks() {
    return new Promise( (resolve, reject) => {
        
        let marks = 91;

        setTimeout( () => {
            if(marks >= 90) {
                resolve("Party!!!");
            }
            else {
                reject("Nalaik!!");
            }
        }, 5000)
    })
}

checksMarks().then( () => {        // .then method is always used on promise
    console.log("Party!!!!");
    
})
.catch( () => {
    console.log("No Party!!");
    
})
*/

// tsc --init , npm init -y

/*
function checksMarks() {
    return new Promise( (resolve, reject) => {
        
        let marks = 89;

        setTimeout( () => {
            if(marks >= 90) {
                resolve("Party!!");
            }
            else {
                reject("Nalaik!!");
            }
        }, 5000)
    })
}

checksMarks()
.then( (msg) => {
    console.log("Party!!!!");
    console.log(msg, 'Message!');
    
})
.catch( (err) => {
    console.log("No Party!!!!");
    console.log(err, 'Error!');
    
})
*/

/*
function checksMarks() {
    return new Promise( (resolve, reject) => {
        
        let marks = 91;

        setTimeout( () => {
            if(marks >= 90) {
                resolve("Party!!");
            }
            else {
                reject("Nalaik!!");
            }
        }, 5000)
    })
}

// await is always connect to promise

const returnValue = await checksMarks();  
console.log(returnValue);
*/