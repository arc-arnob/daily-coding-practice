/**
 * Given an integer array nums, 
 * return true if any value appears at least
 * twice in the array, and return false if
 *  every element is distinct.
 */
// XOR
// 1 ^ 1 
const containsDuplicate = (arr) => {
    const hashMap = {};
    for (let i = 0; i < arr.length; i++) {
        if (hashMap[arr[i]]) return true;
        hashMap[arr[i]] = 1;
    }
    return false;
}

console.log(containsDuplicate([11, 12, 133]));