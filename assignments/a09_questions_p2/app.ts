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

let multiDiArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function findDiagnol(a: number[][]) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            const element = a[i][j + count];
            console.log(element);
            
            
        }
    }
    ++count;
}

findDiagnol(multiDiArray);


/*
function sumArr(a: number[][]) {
    let myArr = a.flat();
    let sum = myArr.reduce((a: number, b: number) => a + b);
    return sum;
}

let returnValue = sumArr(multiDiArray);
console.log(returnValue);
*/