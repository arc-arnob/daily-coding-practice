/**
 * There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

Could you manage to implement your own one?

Here is an example to illustrate

const arr = [1, [2], [3, [4]]];

flat(arr)
// [1, 2, 3, [4]]

flat(arr, 1)
// [1, 2, 3, [4]]

flat(arr, 2)
// [1, 2, 3, 4]

follow up

Are you able to solve it both recursively and iteratively?

 */

// Array.prototype.flat
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]], [[[[6, 8]]]]];

console.log(arr2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]

function flat(arr, depth = 1) {
    const result = [];
    // for each item,
    // if it is an array, flatten it first then add it to the result
    // if not an array, just add it to result
    for (const item of arr) {
        if (Array.isArray(item) && depth > 0) {
            const flattened = flat(item, depth - 1);
            for (const item of flattened) {
                result.push(item);
            }
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flat(arr2, 5));

// Faith - f([1,2,3,4]) => [1,2,3,4]
// Expectation => f([1,[[2]], 3,4]) => f(1, [2], 3, 4) 
// Meet