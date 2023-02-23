/**
 * Given a sorted array of distinct integers and a target value, return the index if
 *  the target is found.
 * If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 */
function searchInsert(nums, target) {
    // Binary search
    var high = nums.length - 1;
    var low = 0;
    var mid = null;
    var result = null;
    if (target < nums[0])
        return 0;
    if (low === high)
        return nums[low] > target ? low : high + 1;
    while (high > low) {
        mid = Math.floor((high + low) / 2);
        // break;
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] > target)
            high = mid;
        else
            low = mid + 1;
        if (nums[high] < target) {
            return high + 1;
        }
        if (nums[low] > target) {
            return low;
            // result = low;
            // break;
        }
    }
    if (nums[high] === target)
        result = high;
    if (nums[low] === target)
        result = low;
    return result;
}
;
console.log(searchInsert([1], 2));
//                        0 1 2 3
