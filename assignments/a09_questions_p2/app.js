// TypeScript Home Work Assignments
// 1. Basic Array Operations
/*
let fruits: string[] = ["Apple", "Orange", "Banana", "Mango"];

fruits.push('Watermalon');
fruits.shift();
fruits.unshift('PineApple');

fruits.splice(2, 1);

console.log(fruits);
*/
// 2. Working with Multidimentional Array
/*
let multiDiArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function findDiagnol(a: number[][]) {
    const myArr = [];
    for (let i = 0; i < a.length; i++) {
        myArr.push(a[i][i]);
    }

    console.log(myArr);
    
}

findDiagnol(multiDiArray);
*/
/*
function sumArr(a: number[][]) {
    let myArr = a.flat();
    let sum = myArr.reduce((a: number, b: number) => a + b);
    return sum;
}

let returnValue = sumArr(multiDiArray);
console.log(returnValue);
*/
// 3. Filter and Searching in Arrays of Object
/*
interface Book {
    title: string;
    author: string;
    yearPublished: number;
}

const library: Book[] = [
    { title: 'OOlika', author: 'M.G John', yearPublished: 1990 },
    { title: 'PPlaghs', author: 'K.L Alice', yearPublished: 1991 },
    { title: 'ppomer', author: 'M.I Udda', yearPublished: 1992 },
    { title: 'dyiuys', author: 'M.K Pony', yearPublished: 1993 },
    { title: 'sfoias', author: 'U Britol', yearPublished: 1994 },
    { title: 'jhjyuys', author: 'Danny', yearPublished: 1995 },
    { title: 'oioto', author: 'K.L Marley', yearPublished: 1996 },
    { title: 'paodps', author: 'Sidn', yearPublished: 1997 },
    { title: 'jfhit', author: 'Kinny', yearPublished: 1998 },
    { title: 'ryiot', author: 'I Munaaj', yearPublished: 1999 },
    { title: 'opoplhj', author: 'P Lilly', yearPublished: 2000 },
    { title: 'bmkfjhk', author: 'V.K Jonny', yearPublished: 2001 },
    { title: 'awjhjdf', author: 'Wisk', yearPublished: 2002 },
    { title: 'pooiew', author: 'Qussl', yearPublished: 2003 },
    { title: 'mnbdgh', author: 'Orale', yearPublished: 2004 },
    { title: 'qwrdr', author: 'Pliij', yearPublished: 2005 },
    { title: 'opjkue', author: 'S Bolla', yearPublished: 2006 },
    { title: 'vbfds', author: 'C Viki', yearPublished: 2007 },
];

function filterYear(year: number) {
    let newLibrary: any;
    
    for (let i = 0; i < library.length; i++) {
        const element: any = library[i];
        
        if(element.yearPublished === year) {
            newLibrary = library.slice(i);
        }
    }
    console.log(newLibrary);
    
}

filterYear(2000);
*/
/*
function searchFilterArrar(author: string) {
    return library.filter(book => book.author === author);
}

const returnValue = searchFilterArrar('Danny');
*/
// console.log(returnValue);
// 4. Using Array Methods
const myNums = [1, 23, 65, 12, 254, 67, 77, 8, 52, 100, 111, 42, 123, 84, 45];
const studentsDetailes = [
    { name: 'ali', id: 0, grades: [67, 45, 78, 89, 56] },
    { name: 'abubaker', id: 1, grades: [34, 45, 57, 45, 67] },
    { name: 'abdullah', id: 2, grades: [34, 56, 57, 34, 56] },
    { name: 'ayub', id: 3, grades: [56, 78, 67, 89, 67] },
    { name: 'bilal', id: 4, grades: [67, 78, 56, 78, 89] },
    { name: 'farhan', id: 5, grades: [89, 78, 67, 78, 89] },
    { name: 'faisal', id: 6, grades: [78, 78, 77, 88, 67] },
    { name: 'faizan', id: 7, grades: [54, 63, 73, 83, 92] },
    { name: 'hanzala', id: 8, grades: [67, 79, 51, 61, 52] },
    { name: 'hanif', id: 9, grades: [79, 89, 78, 67, 45] },
    { name: 'israr', id: 10, grades: [62, 73, 84, 63, 57] },
    { name: 'jawad', id: 11, grades: [87, 79, 85, 82, 81] },
    { name: 'javed', id: 12, grades: [81, 74, 79, 91, 82] },
    { name: 'moneeb', id: 13, grades: [91, 82, 83, 78, 81] },
    { name: 'osama', id: 14, grades: [94, 89, 91, 88, 90] },
    { name: 'tayyab', id: 15, grades: [90, 90, 91, 87, 81] },
];
console.log(studentsDetailes);
function avgGrade(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.averageGrade = ((element.grades.reduce((a, b) => a + b)) / 500) * 100;
    }
    return arr;
}
let upgradeStudentsDetails = avgGrade(studentsDetailes);
console.log(upgradeStudentsDetails);
export {};
