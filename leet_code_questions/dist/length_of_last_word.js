/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
consisting of non-space characters only.
https://leetcode.com/problems/length-of-last-word/
 */
function lengthOfLastWord(s) {
    // Set pointer to end of the string;
    var pointer = s.length - 1;
    var counter = 0;
    // console.log("pointer: ", pointer)
    while (pointer >= 0 && s.charAt(pointer)) {
        if (s.charAt(pointer) === ' ') {
            if (counter > 0)
                return counter;
            else {
                pointer--;
                continue;
            }
        }
        counter++;
        pointer--;
    }
    return counter;
}
;
console.log(lengthOfLastWord("hello is this love?    "));
