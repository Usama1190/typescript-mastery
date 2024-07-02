// Four principals or rules in OOP 
// 1. Encapsulation      2. Polymorphism         3. Inheritance
// 4. Abstraction
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log('general sound');
    };
    return Animal;
}());
var ani1 = new Animal('Tun tun!');
var ani2 = new Animal('Mun mun!');
// console.log(ani1);
// console.log(ani1.name);
// ani1.makeSound();
// console.log(ani2);
// console.log(ani2.name);
// ani2.makeSound();
// Inheritance => extends
// class Cat extends Animal {
//     color: string;
//     constructor(name: string, color: string) {
//         super('name');
//         this.color = color;
//     }
// }
// let cat1 = new Cat('Bilo', 'red');
// cat1.makeSound();
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
var Parent = /** @class */ (function () {
    function Parent() {
        this.parentName = 'Israr';
        this.secret = 'israr1190';
        this.cardPinCode = 1190;
    }
    return Parent;
}());
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children(childName) {
        var _this = _super.call(this) || this;
        _this.childName = 'Osama';
        _this.childName = childName;
        return _this;
    }
    return Children;
}(Parent));
var childOne = new Children('Hanzala');
console.log(childOne);
