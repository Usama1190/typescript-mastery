// TypeScript Arrays and Their Properties

/*
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits.length);   // 3

console.log(fruits[1]);
// "Banana" - Accessing the second element (index starts at 0)
*/


/*
let fruits: string[] = ['Apple', 'Banana', 'Cherry'];

console.log(fruits.length);   // 3

console.log(fruits[1]);
// "Banana" - Accessing the second element (index starts at 0)
*/





// Array Methods
/*
let colors: string [] = ['Red', 'Green', 'Blue'];

colors.push('Yellow');      // Adds "Yellow" to the end
colors.pop();               // Removes the last element ("Yellow")
colors.shift();             // Removes the first element ("Red")
colors.unshift('Purple');   // Adds "Purple" to the start

console.log(colors);    // ["Purple", "Green", "Blue"]
*/





// Multidimentional Arrays
/*
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix[1][2]);
// 6 - Accessing the third element in the second array
*/





// Working with Objects and Arrays
/*
type Book = {
    title: string;
    author: string;
    isbn: string;
}

const libaray: Book[] = [
    { title: 'The Hobbit', author: 'Usama', isbn: '1234567890' },
    { title: '1994', author: 'Israr', isbn: '987654321' }
];

// Adding a new book to the array
libaray.push({
    title: 'The Lord of the Rings',
    author: 'Ali',
    isbn: '837685673'
})

// Finding a book by author
const foundBook = libaray.find((book) => book.author === 'Israr');
console.log(foundBook);
// output: { title: '1994', author: 'Israr', isbn: '987654321' }
*/




// Home Work Assignments   
// go to the assignment folder and step a09_questions_p2