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






// Topic : Object Oriented Programming               June 29 , 2024

/*
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log('general sound');
        
    }
}

let ani1 = new Animal('Tun tun!');
let ani2 = new Animal('Mun mun!');
*/

// console.log(ani1);
// console.log(ani1.name);

// ani1.makeSound();

// console.log(ani2);
// console.log(ani2.name);

// ani2.makeSound();


// Inheritance => extends

/*
class Cat extends Animal {
    color: string;

    constructor(name: string, color: string) {
        super('name');

        this.color = color;
    }
}

let cat1 = new Cat('Bilo', 'red');

cat1.makeSound();
*/

/*
class Cat extends Animal {
    color: string;

    constructor(name: string, color: string) {
        super(name);

        this.color = color;
    }

    makeSound() {                     // over riding this phenomenon is 
        console.log('Meow! meow!');   //     called Polymorphism
        
    }
}

let cat1 = new Cat('tun tun!', 'blue');

console.log(cat1);

cat1.makeSound();
*/

/*
class Dog extends Animal {
    color: string;

    constructor(name: string) {
        super(name);

        this.color = color;
    }

    makeSound() {                     // over riding this phenomenon is 
        console.log('bark! bark!');   //     called Polymorphism
        
    }
}

let dog1 = new Dog('Tommy!', 'black')

console.log(dog1);

dog1.makeSound();
*/


/*
class Parent {
    parentName: string = 'Israr';
    secret: string = 'israr1190';
    cardPinCode: number = 1190;
}

class Children extends Parent{
    childName: string = 'Osama';

    constructor(childName: string) {
        super();

        this.childName = childName;
    }
}

let childOne = new Children('Hanzala');

console.log(childOne);
*/


// Encapsulation => Access modifier public , private and protected

/*
class Parent {
    public parentName: string = 'Israr';
    private secret: string = 'israr1190';
    protected cardPinCode: number = 1190;
}

class Children extends Parent{
    childName: string = 'Osama';

    constructor(childName: string) {
        super();

        this.childName = childName;
    }
}

let childOne = new Children('Saeed');

console.log(childOne);
*/

/*
class Parent {
    public parentName: string = 'Israr';
    private secret: string = 'israr1190';
    protected cardPinCode: number = 1190;

    // getSecret() {                      // Accessable
    //     console.log(this.secret);
        
    // }
}

class Children extends Parent{
    childName: string = 'Osama';

    constructor(childName: string) {
        super();

        this.childName = childName;
    }

    getInfo() {
        console.log(this.childName);
        
    }
}

let childOne = new Children('Saeed');

childOne.getInfo();       // Not allowed to access secret
*/


// Abstraction 

/*
interface IDraw {
    draw: () => void        // Only Declaration
}

class Circle implements IDraw {
    draw() {
        console.log('Drawing!');
        
    }
}

let myCircle = new Circle();

myCircle.draw();


class Triangle implements IDraw {
    draw() {
        console.log('Drawing triangle!');
        
    }
}

let myTriangle = new Triangle()

myTriangle.draw();
*/

/*
interface IDraw {       // Interface type banane ke liye used hota h
    draw: () => void;
    color: () => void;
}

class Circle implements IDraw {
    draw() {
        console.log('Drawing circle!');
        
    }

    color() {
        console.log('Blue!');
        
    }
}

let myCircle = new Circle();

myCircle.draw();
myCircle.color();
*/

/*
class Triangle implements IDraw {
    draw() {
        console.log('Drawing triangle!');
        
    }

    color() {
        console.log('purple!');
        
    }
}

let myTriangle = new Triangle();

myTriangle.draw();
myTriangle.color();
*/