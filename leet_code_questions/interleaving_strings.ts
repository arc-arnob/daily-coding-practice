/**
 * https://leetcode.com/problems/interleaving-string/description/
 * Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m 
substrings
 respectively, such that:
 */


function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s1.length + s2.length !== s3.length) return false;
    // Memoization Table
    let dp: boolean[][] = []; // s1.length * s2.length
    for (let row = 0; row <= s1.length; row++) {
        dp.push(Array(s2.length + 1).fill(false));
    }

    dp[0][0] = true;
    console.log("*****", dp);

    // Fill rows
    for (let col = 1; col <= s2.length; col++) {
        dp[0][col] = dp[0][col - 1] && s2.charAt(col - 1) == s3.charAt(col - 1);
    }
    // Fill Cols
    for (let row = 1; row <= s1.length; row++) {
        dp[row][0] = dp[row - 1][0] && s1.charAt(row - 1) == s3.charAt(row - 1);
    }

    // RUN DP
    for (let row = 1; row <= s1.length; row++) {
        for (let col = 1; col <= s2.length; col++) {
            console.log(dp[row][col], row, col, s1[row - 1], s2[col - 1]);
            dp[row][col] = (dp[row - 1][col] && s1.charAt(row - 1) == s3.charAt(row + col - 1)) || (dp[row][col - 1] && s2.charAt(col - 1) == s3.charAt(row + col - 1));
        }
    }
    return dp[s1.length][s2.length];

};