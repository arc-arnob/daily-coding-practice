// Binary Search is Divide and Conquer Algo.

const inputArray = [10, 20, 40, 78, 80, 110, 200, 400, 5000]

// Search 80;

const binraySearch = (nums: number[], target: number): number => {
    let low: number = 0;
    let high: number = nums.length - 1;
    while (low <= high) {
        let midIndex: number = Math.floor((low + high) / 2);
        if (nums[midIndex] === target) return midIndex;
        else if (nums[midIndex] > target) high = midIndex - 1;
        else if (nums[midIndex] < target) low = midIndex + 1;
    }
    return -1;
}

console.log(binraySearch(inputArray, 5000)); 
