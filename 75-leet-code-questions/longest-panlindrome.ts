/**
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

 */

const longestPalindrome = (s: string): number => {
    const mapping = {};
    const chars: string[] = s.split("");
    // First Character
    const firstBinary: number = charToBinary(chars[0]);
    let finalBinary: number = null;

    chars.forEach(ele => {
        finalBinary ^= charToBinary(ele);
        if (Object.keys(mapping).includes(ele)) {
            mapping[ele] += 1;
        } else {
            mapping[ele] = 1;
        }
    })
    console.log("BINARY: ", finalBinary === firstBinary);
    if (finalBinary === firstBinary) return s.length;

    let palindromeLength: number = 0;
    let oddFlag = false;
    Object.keys(mapping).forEach((ele) => {
        if (mapping[ele] === 1 && !oddFlag) {
            palindromeLength += 1;
            oddFlag = true;
        } else if (mapping[ele] % 2 == 0) {
            palindromeLength += mapping[ele];
        } else if (mapping[ele] % 2 !== 0) {
            palindromeLength += mapping[ele] - 1;
        }
    })
    console.log("BINARY w: ", mapping);
    return palindromeLength;
};

const charToBinary = (char: string): number => {
    let binary = char.charCodeAt(0).toString(2);
    return parseInt(binary);
}

console.log(longestPalindrome('aaa'));