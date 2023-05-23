/**
 * https://leetcode.com/problems/move-zeroes/description/
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    // [0, 1, 0, 3, 12, 0, 0]
    // [1, 0, 0, 3, 12, 0, 0]
    // [1, 3, 0, 0, 12, 0, 0]
    // [1, 3, 12, 0, 0, 0, 0]]
    // Trick: Keep Swaping non zeros with the first 0 that we encountered
    // [1, 0, 1, 2, 0, 0, 4, 2, 0, 1]
    // [1, 0, 1, 2, 0, 0, 4, 2, 0, 1]
    // [1, 1, 0, 2, 0, 0, 4, 2, 0, 1]
    // [1, 1, 2, 0, 0, 0, 4, 2, 0, 1]
    // [1, 1, 2, 0, 0, 0, 4, 2, 0, 1]
    // [1, 1, 2, 0, 0, 0, 4, 2, 0, 1]
    // [1, 1, 2, 4, 0, 0, 0, 2, 0, 1]
    // [1, 1, 2, 4, 2, 0, 0, 0, 0, 1]
    // [1, 1, 2, 4, 2, 0, 0, 0, 0, 1]
    // [1, 1, 2, 4, 2, 1, 0, 0, 0, 0]

    // [0, 1, 1, 1]
    // [1, 1, 0, 0]

    let firstZeroPos = -1;
    const n: number = nums.length;
    for (let i = 0; i < n; i++) {
        // Snowballing
        if (!nums[i] && firstZeroPos < 0) {
            firstZeroPos = i;
        } else if (nums[i] && firstZeroPos >= 0) {
            let temp: number = nums[i];
            nums[i] = nums[firstZeroPos];
            nums[firstZeroPos] = temp;
            firstZeroPos = firstZeroPos + 1;
        }
        //    console.log("Pass: ", nums)
    }

    // console.log(nums);

};  