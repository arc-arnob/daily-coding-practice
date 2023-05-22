/**
 * 
 * https://leetcode.com/problems/is-subsequence/submissions/955301766/?envType=study-plan-v2&id=leetcode-75
 * 
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 */
function isSubsequence(s: string, t: string): boolean {
    // h a b g d c
    //   . .     .
    // a b c
    // . . .
    //

    let lastCharacterFound = false;
    let j = 0;
    let tPtr = s[j];
    for (let i = 0; i < t.length; i++) {
        if (t[i] == tPtr) {
            lastCharacterFound = true;
            tPtr = s[++j];
        }
    }
    return j === s.length;
};