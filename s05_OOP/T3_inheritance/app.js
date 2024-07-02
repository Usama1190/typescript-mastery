// Four principals or rules in OOP 
// 1. Encapsulation      2. Polymorphism         3. Inheritance
// 4. Abstraction
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log('Drawing circle!');
    };
    Circle.prototype.color = function () {
        console.log('Blue!');
    };
    return Circle;
}());
var myCircle = new Circle();
myCircle.draw();
myCircle.color();
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        console.log('Drawing triangle!');
    };
    Triangle.prototype.color = function () {
        console.log('purple!');
    };
    return Triangle;
}());
var myTriangle = new Triangle();
myTriangle.draw();
myTriangle.color();
