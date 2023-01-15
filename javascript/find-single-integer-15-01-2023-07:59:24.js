/**
 * Given an array of integers, all integers appear twice except one integer, could you quickly target it ?

const arr = [10, 2, 2 , 1, 0, 0, 10]
findSingle(arr) // 1

What is time & space cost of your approach ? Could you do better ?

 */

// O(n2) -> Brute force.
//  XOR operation - Bits are same: output: 0, diff: 1

const findSingleElement = (arr) => {
    return arr.reduce((a, b) => a ^ b, 0);
};

console.log(findSingleElement([10, 20, 20, 10, 1, 1, 999999, 56, 56]));