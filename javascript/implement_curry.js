/**
 * Currying is a useful technique used in JavaScript applications.

Please implement a curry() function, which accepts a function and return a curried one.

Here is an example:
const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
 */

// What is Currying: 
/**
 * It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence.
 */

// Understand Call, Bind, Apply

// Call Example
// Example 1
let person = {
    firstName: 'Arnob',
    lastName: 'Chowdhury',
    printName: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}
person.printName()

// Function Borrowing
let person2 = {
    firstName: 'Shraws',
    lastName: 'sigs'
}

person.printName.call(person2);


// Example 2

let car1 = {
    name: "lexus",
    model: "vci"
}
let car2 = {
    name: "BMW m5",
    model: "ddsci"
}
// This is fail, since arrow functions do not have access to 'this'
// const printCarDetials = () => {
//     console.log(this.name, this.model);
// }
let printCarDetials = function () {
    console.log(this.name, this.model);
}

let printCarDetailsWithLocation = function (location, state, pincode) {
    console.log(this.name + " " + this.model + " from " + location, state, pincode);
}

printCarDetials.call(car1);
printCarDetials.call(car2);

printCarDetailsWithLocation.call(car1, "delhi", "Delhi", "201011")

// APPLY example: Same as call but with Array as arguments

printCarDetailsWithLocation.apply(car1, ["delhi", "Delhi NCR", "201111"])

// Bind: Same as call, but instead of calling method, it binds the method with the 
// Object and Returns us the copy of the method.

let printCarDetailsLater = printCarDetailsWithLocation.bind(car2, "delhi", "Delhi", "201011");
console.log(printCarDetailsLater); // Prints the function

console.log(printCarDetailsLater()); // Executes the function.
