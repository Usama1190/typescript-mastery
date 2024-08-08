// TypeScript Arrays and Their Properties
const libaray = [
    { title: 'The Hobbit', author: 'Usama', isbn: '1234567890' },
    { title: '1994', author: 'Israr', isbn: '987654321' }
];
// Adding a new book to the array
libaray.push({
    title: 'The Lord of the Rings',
    author: 'Ali',
    isbn: '837685673'
});
const foundBook = libaray.find((book) => book.author === 'Israr');
console.log(foundBook);
console.log(libaray);
export {};
