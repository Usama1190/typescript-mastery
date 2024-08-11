// Home Work Assignments



// 1. Loop through an Array with For-Of
/*
const movies: string[] = ['harry potter', 'tarzan', '1920', 'titanic', 'koi mil gaya', 'conjuring', 'doll'];

function printEachMovie() {
    for(let moive of movies) {
        console.log(`I watched ${moive} movie.`);
        
    }
}

printEachMovie();
*/





// 2. Enumerates Properties with For-In Loop
/*
interface Car { make: string, model: string, year: number };

const myCar: Car = {
    make: 'Toyota',
    model: 'XC60',
    year: 2000
}

function printEachProperty() {
    for(let prop in myCar) {
        console.log(`Property: ${prop}, and its value: ${myCar[prop as keyof Car]}`);
        
    }
}

printEachProperty();
*/


/*
const car = {
    make: 'Toyota',
    model: 'XC60',
    year: 2000
}

function printEachProperty(car: { [key: string]: string | number }) {
    for(const key in car) {
        console.log(`Property: ${key}, and its value: ${car[key]}`);
        
    }
}

printEachProperty(car);
*/






// 3. Basic For Loop Exercise
/*
function myFunc() {
    for (let i = 1; i <= 100; i++) {
        const element = i;

        if(element % 3 === 0) {
            console.log('Fizz');
            
        }else if(element % 5 === 0) {
            console.log('Buzz');
            
        }
        else if(element % 3 === 0 && element % 5 === 0) {
            console.log('FizzBuzz');
            
        }
        else {
            console.log(i);
            
        }
        
    }
}

myFunc();
*/






// 4. Practicing Do-While Loop
/*
function guessingGame() {
    let userNum = prompt('Guess a number between 1 to 10');
    let mechineGeneratedNumber: number = Math.random();
    console.log(mechineGeneratedNumber);
    
}

guessingGame();
*/





// 5. While Loop For a Countdown
/*
function countDown(num: number) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

countDown(15);
*/





// 6. Enums For Days of the Week
/*
function checkWeekDays(day: string) {
    switch (day) {
        case day = 'Sunday' || 'Saturday':
            console.log('Weekend');
            break;
    
        default:
            console.log('Weekday');            
    }
}

checkWeekDays('Sunday');
*/




// 7. Tuples For RGB Colors

const tuple: [string, string, string] = ['Red', 'Green', 'Blue'];

function rgb(x: []) {}