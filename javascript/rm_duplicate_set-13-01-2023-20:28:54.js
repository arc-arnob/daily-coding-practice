/**
 * Given two arrays, find the intersection(items occur in both arrays)
    arrays are not sorted, and might have duplicates.
    you can modify the arrays
    you can return the items in any order, but without duplicates.
    This is an easy problem, What is the time & space complexity of your approach?
 */


function getIntersection(arr1, arr2) {
    // your code here
    const output = Array.from(new Set(arr1.filter(ele => arr2.includes(ele))));
    return output
}
console.log(getIntersection([1, 2, 3, 82], [1, 3, 4, 77, 8, 82]));