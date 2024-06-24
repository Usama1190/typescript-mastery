// Topic Synchoronous and Asynchoronous JavaScript ,         June 08 , 24
//       setTimeout() , callBack function , Promise , await

// Synchoronous JavaScript executes line by line and fast , no wait
/*
console.log("First");

setTimeout( () => {
    console.log("Second");
    
}, 3000);

console.log("Third");
*/

// Asynchronous JavaScript executes parallel programming
/*
console.log("First");

setTimeout( () => {
    console.log("Second");
    
}, 0);

console.log("Third");
*/
/*
console.log("First");

setTimeout( () => {
    console.log("Second");
    
});

console.log("Third");
*/  

/*
function orderPizza() {
    setTimeout( () => {
        return "Order Placed";
    }, 2000);
}

let result = orderPizza();

console.log(result);          // undefined
*/

/*
function orderPizza() {
    setTimeout( () => {
        console.log("Order Placed");
        
    }, 2000);
}

orderPizza();
*/

/*
function orderPizza() {

}

console.log(orderPizza());        // undefined
*/

/*
function preparePizza() {
    setTimeout( () => {
        console.log("Prepared Pizza!");
        
    }, 5000);
}

preparePizza();
*/

/*
function orderPizza( preparePizzaCb: any ) {
    setTimeout( () => {
        console.log("Order Placed");
        preparePizzaCb();
        
    }, 2000);    
}

orderPizza( preparePizza );

function preparePizza() {
    setTimeout( () => {
        console.log("Prepared Pizza!");
        
    }, 5000);
}
*/

/*
type Fn = () => void;

function orderPizza( preparePizzaCb: Fn ) {
    setTimeout( () => {
        console.log("Order Placed");
        preparePizzaCb();
        
    }, 2000);    
}

orderPizza( preparePizza );

function preparePizza() {
    setTimeout( () => {
        console.log("Prepared Pizza!");
        
    }, 5000);
}
*/


// Call back hell  ( function inside function inside function inside... )
//                   Pyramid of dooooom!


// Pormise

/*
function checksMarks() {
    return new Promise( (resolve, reject) => {
        
        let marks = 91;

        setTimeout( () => {
            if(marks >= 90) {
                resolve("Party!!!");
            }
            else {
                reject("Nalaik!!");
            }
        }, 5000)
    })
}

checksMarks().then( () => {        // .then method is always used on promise
    console.log("Party!!!!");
    
})
.catch( () => {
    console.log("No Party!!");
    
})
*/

// tsc --init , npm init -y

/*
function checksMarks() {
    return new Promise( (resolve, reject) => {
        
        let marks = 89;

        setTimeout( () => {
            if(marks >= 90) {
                resolve("Party!!");
            }
            else {
                reject("Nalaik!!");
            }
        }, 5000)
    })
}

checksMarks()
.then( (msg) => {
    console.log("Party!!!!");
    console.log(msg, 'Message!');
    
})
.catch( (err) => {
    console.log("No Party!!!!");
    console.log(err, 'Error!');
    
})
*/

/*
function checksMarks() {
    return new Promise( (resolve, reject) => {
        
        let marks = 91;

        setTimeout( () => {
            if(marks >= 90) {
                resolve("Party!!");
            }
            else {
                reject("Nalaik!!");
            }
        }, 5000)
    })
}

// await is always connect to promise

const returnValue = await checksMarks();  
console.log(returnValue);
*/