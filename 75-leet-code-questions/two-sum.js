/**
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
* You may assume that each input would have exactly one solution, and you may not use the same element twice.
* You can return the answer in any order.
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 */

const twoSum = (arr, target) => {
    const mapping = [];
    for (let i in arr) {
        if (mapping.includes(arr[i])) return true;
        mapping.push(target - arr[i]);
    }
    return false;
}

const twoSumWithIndex = (arr, target) => {
    const mapping = {}
    const res = [];
    for (let i in arr) {
        if (Object.keys(mapping).includes(arr[i] + '')) {
            res.push(parseInt(mapping[arr[i] + '']));
            res.push(parseInt(i));
            return res;
        }
        const keyVal = target - arr[i] + ''
        mapping[keyVal] = i;
    }
}

console.log(twoSumWithIndex([1, 2, 3, 4], 7));