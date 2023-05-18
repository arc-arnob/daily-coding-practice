/**
 * 
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
    *   Return the merged string.
 */

function mergeAlternately(word1: string, word2: string): string {
    // w1 = abc
    // w2 = pqr
    // apbqcr
    // w1 = '', w2= pqr, vv
    // w1 = a, w2 = poi => apoi
    // w1 = ab, w2 = pqrst =? a p b q r s t
    // w1 = abcdefgh, w2 = pqr => a p b q c r d e f g h...
    // Two Pointer Approach?
    let res = ''; // Space: O(n+m)

    let i = 0;
    let j = 0;
    const word1Len = word1.length;
    const word2Len = word2.length;
    while (i < word1Len && j < word2Len) {
        res += word1[i] + word2[i];
        i++;
        j++;
    }

    while (i < word1Len) {
        res += word1[i];
        i++;
    }
    while (j < word2Len) {
        res += word2[j];
        j++;
    }

    return res;
};