/**
 * https://leetcode.com/problems/3sum-closest/
 * @param nums Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

 * @param target
 */
function threeSumClosest(nums, target) {
    nums.sort(function (a, b) { return a - b; });
    var min_diff = Number.MAX_VALUE;
    for (var i = 0; i < nums.length; i++) {
        var nums_i = nums[i];
        var j = i + 1;
        var k = nums.length - 1;
        while (j < k) {
            var sum = nums_i + nums[j] + nums[k];
            // console.log(sum, min_diff);
            if (Math.abs(sum - target) < Math.abs(min_diff - target)) {
                min_diff = sum;
                j++;
                k--;
            }
            else if (sum < min_diff)
                j++;
            else
                k--;
        }
    }
    return min_diff;
}
;
console.log(threeSumClosest([1, 1, 1, 0], 100));
