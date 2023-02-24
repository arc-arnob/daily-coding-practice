/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
consisting of non-space characters only.
https://leetcode.com/problems/length-of-last-word/
 */

function lengthOfLastWord(s: string): number {
    // Set pointer to end of the string;
    let pointer = s.length - 1;
    let counter: number = 0;

    while (pointer >= 0 && s.charAt(pointer)) { // charAt takes more time??
        if (s.charAt(pointer) === ' ') {
            if (counter > 0) return counter;
            else {
                pointer--;
                continue;
            }
        }
        counter++;
        pointer--;

    }
    return counter;
};

console.log(lengthOfLastWord("hello is this love?    "));