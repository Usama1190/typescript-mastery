// Topic : enum + loop + any + unknown                      MAY 18 , 24
// enum Color {
//     Red,
//     Green,
//     Yellow
// }
// let trafficLight : Color = Color.Green; 
// console.log(Color.Yellow);           // result 2
// console.log(Color[0]);               // result Red
// console.log(Color['Yellow']);        // result 2
// console.log(trafficLight);           // result 1
// initialization enum
// enum Color {
//     Red = 2,
//     Green,
//     Yellow
// }
// console.log(Color.Green);               // result 3
// console.log(Color.Yellow);              // result 4
// console.log(Color.Red);                 // result 2
// enum Color {
//     Red,
//     Green = 2,
//     Yellow
// }
// console.log(Color.Yellow);                // result 3
// console.log(Color.Green);                 // result 2
// console.log(Color.Red);                   // result 0
// real world example
// enum Login {
//     Google,
//     Facebook,
//     Email
// }
// enum are alternate of type literals or union
// enum are used for data type or value
// enum Color {
//     Red,
//     Green,
//     Yellow
// }
// let trafficLight = Color.Red;
// if( trafficLight == Color.Red) {
//     console.log('Please Stop Vehicle!');
// }
// else if (trafficLight == Color.Yellow) {
//     console.log('Start the engine and ready for drive');
// }
// else if (trafficLight == Color.Green) {
//     console.log('Go!');
// }
// Home Work : enum example with switch statements / cases
// loop
// for(let i = 0; i < 100; i++) {
//     console.log('Sorry!');
// }
// for (let i = 0; i < 3; i++) {
//     console.log('Sorry!');
// }
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
// for(let i = 10; i > 0; i--) {
//     console.log(i);
// }
// let fruits = ['Apple','Mango','Banana'];
// for(let i = 0; i <= 2; i++) {
//     console.log(fruits[1]);
// }
// for(let i = 0; i <= 2; i++) {
//     console.log(fruits[i]);
// }
// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// Home Work : while loop
// type any
// let age: any;       // kuch bhi
// age = 1;            // ok
// age = 'John';       // ok
// age = true;         // ok
// age = null          // ok
// age.shfjdfhj;       // ok
// type unknown
// let age: unknown;      // pata nahi
// age = 2;               // ok
// age = 'Doe';           // ok
// age = false;           // ok
// age = null;            // ok
// age.sfhdkhfj;          // not ok
// Home Work : difference b/w any and unknown
