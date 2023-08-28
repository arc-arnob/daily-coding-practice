/**
 * 
 * https://leetcode.com/problems/maximum-length-of-pair-chain/
 * @param pairs You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

Return the length longest chain which can be formed.

You do not need to use up all the given intervals. You can select pairs in any order.
 */
function findLongestChain(pairs: number[][]): number {
    return bruteForce(pairs);
};

function bruteForce(pairs: number[][]): number {
    let count: number = 0;
    let prev: number = -1001;
    pairs.sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < pairs.length; i++) {
        // if (pairs[i - 1][1] == pairs[i][0]) pairs.splice(i, 1);
        if (prev < pairs[i][0]) {
            count++;
            prev = pairs[i][1];
        }
    }
    return count;
}
