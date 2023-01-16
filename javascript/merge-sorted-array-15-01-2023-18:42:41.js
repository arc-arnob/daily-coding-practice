/**
 * Given 2 sorted array of integers, find the elements that exist in both arrays.

intersect(
  [1,2,2,3,4,4],
  [2,2,4,5,5,6,2000]
)
// [2,2,4]

    The arrays might have duplicate numbers.
    The order of returning result doesn't matter.
    What is the time & space cost of your approach? Could you improve it?

 */

// Since arrays are sorted we can use Two Pointer approach;
const mergeTwoArrays = (arr1, arr2) => {
    let p1 = 0;
    let p2 = 0;
    let result = [];
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] === arr2[p2]) {
            result.push(arr1[p1]);
            p1 += 1;
            p2 += 1;
        } else {
            if (arr1[p1] < arr2[p2]) p1 += 1;
            else p2 += 1;
        }
    }
    return result;
}
console.log(mergeTwoArrays([1, 2, 2, 3, 4, 4],
    [2, 2, 4, 5, 5, 6, 2000]));