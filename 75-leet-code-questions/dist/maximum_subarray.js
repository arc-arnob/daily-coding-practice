/**
 * Given an integer array nums, find the
subarray
with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

 */
// Kadane Algorithm;
function maxSubArray(nums) {
    var minimimNegativeVal = Number.MIN_VALUE;
    var max_value = -minimimNegativeVal - 1;
    var max_so_far = 0;
    nums.forEach(function (ele) {
        max_so_far = max_so_far + ele;
        if (max_so_far > max_value)
            max_value = max_so_far;
        if (max_so_far < 0)
            max_so_far = 0;
    });
    return max_value;
}
;
console.log(maxSubArray([-2, -1, -3, 9]));
