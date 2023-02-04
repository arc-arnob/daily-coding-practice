/**
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

 */
var longestPalindrome = function (s) {
    var mapping = {};
    var chars = s.split("");
    // First Character
    var firstBinary = charToBinary(chars[0]);
    var finalBinary = null;
    chars.forEach(function (ele) {
        finalBinary ^= charToBinary(ele);
        if (Object.keys(mapping).includes(ele)) {
            mapping[ele] += 1;
        }
        else {
            mapping[ele] = 1;
        }
    });
    console.log("BINARY: ", finalBinary === firstBinary);
    if (finalBinary === firstBinary)
        return s.length;
    var palindromeLength = 0;
    var oddFlag = false;
    Object.keys(mapping).forEach(function (ele) {
        if (mapping[ele] === 1 && !oddFlag) {
            palindromeLength += 1;
            oddFlag = true;
        }
        else if (mapping[ele] % 2 == 0) {
            palindromeLength += mapping[ele];
        }
        else if (mapping[ele] % 2 !== 0) {
            palindromeLength += mapping[ele] - 1;
        }
    });
    console.log("BINARY w: ", mapping);
    return palindromeLength;
};
var charToBinary = function (char) {
    var binary = char.charCodeAt(0).toString(2);
    return parseInt(binary);
};
console.log(longestPalindrome('aaa'));
