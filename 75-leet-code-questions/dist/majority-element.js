/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Could you solve the problem in linear time and in O(1) space?

 */
function majorityElement(nums) {
    // Most Recurring element will be the mode of the array and will lie 
    // somewhere in between.
    // Counting Sort + Find Mid Element;
    nums.sort();
    return nums[Math.floor(nums.length / 2)];
}
;
console.log(majorityElement([12, 333, 333, 333, 333]));
