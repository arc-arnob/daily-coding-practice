// Binary Search is Divide and Conquer Algo.
var inputArray = [10, 20, 40, 78, 80, 110, 200, 400, 5000];
// Search 80;
var binraySearch = function (nums, target) {
    var low = 0;
    var high = nums.length - 1;
    while (low <= high) {
        var midIndex = Math.floor((low + high) / 2);
        if (nums[midIndex] === target)
            return midIndex;
        else if (nums[midIndex] > target)
            high = midIndex - 1;
        else if (nums[midIndex] < target)
            low = midIndex + 1;
    }
    return -1;
};
console.log(binraySearch(inputArray, 5000));
//# sourceMappingURL=binary-search.js.map