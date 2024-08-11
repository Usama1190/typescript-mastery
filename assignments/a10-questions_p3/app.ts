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