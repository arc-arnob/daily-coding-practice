/**
 * Create an object with property count, which increments every time count is accessed, initial value is 0.

const counter = createCounter()
counter.count // 0, then it should increment
counter.count // 1
counter.count // 2
counter.count = 100 // it cannot be altered
counter.count // 3
 */

// Getter: The get syntax binds an object property to a function 
// that will be called when that property is looked up.
//  It can also be used in classes.
const createCounter = () => {
    let counter = -1;
    return {
        get count() {
            counter += 1;
            return counter;
        }
    }
}

const counter = createCounter();

console.log(counter.count);
console.log(counter.count);
console.log(counter.count);
console.log(counter.count);
console.log(counter.count);