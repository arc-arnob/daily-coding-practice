function productExceptSelf(nums: number[]): number[] {
    // [1, 2, 3, 4]
    // hint:Pre and Post multiplication
    // Dynamic Programming: Tabulation
    // [] // []
    // [0 -> i -1,] // [i + 1 -> n]
    // lr: [1, 1, 2, 6] // rr: [24, 12, 4, 1] -> Visited every number twice.
    /**
     * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

     */
    // [24, 12, 8, 6]

    // Cases: 
    // 1. 1st Element lr -> 1, rr -> usual
    // 2. last element rr ->1 , lr -> usual

    // Tablulation
    // Here: multiply nums[i - 1] with lr[i-1];
    // lr: [1, 1, 2, 6] -> Pre Multiplication
    // Here: 1 XXXXX.
    // rr: [24, 12, 4, 1] -> Post Multiplication

    let lr: number[] = [1];
    let rr: number[] = [];
    let res: number[] = [];
    const n: number = nums.length;
    rr[n - 1] = 1;
    for (let i: number = 1; i < nums.length; i++) {
        lr[i] = nums[i - 1] * lr[i - 1]; // O(N)
    }
    for (let i: number = n - 2; i >= 0; i--) {
        rr[i] = rr[i + 1] * nums[i + 1]; // O(N)
    }
    for (let i: number = 0; i < n; i++) {
        res.push(lr[i] * rr[i])
    }


    return res;
};