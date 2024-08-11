// Home Work Assignments
;
const myCar = {
    make: 'Toyota',
    model: 'XC60',
    year: 2000
};
function printEachProperty() {
    for (let prop in myCar) {
        console.log(`Property: ${prop}, and its value: ${myCar[prop]}`);
    }
}
printEachProperty();
export {};
