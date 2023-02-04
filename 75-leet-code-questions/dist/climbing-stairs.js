/**
 * You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

 */
var climbStairs = function (n) {
    var waysToReach = Array(n + 1).fill(0);
    waysToReach[0] = 1;
    waysToReach[1] = 1;
    for (var i = 2; i <= n; i++) {
        if (i >= 1) {
            waysToReach[i] += waysToReach[i - 1];
        }
        if (i >= 2) {
            waysToReach[i] += waysToReach[i - 2];
        }
    }
    console.log(waysToReach);
    return waysToReach[n];
};
climbStairs(6);
