/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

 */

const getValidPalindromeStatus = (str) => {
    // Two Pointer approach
    // If len odd:
    /**
     *  a b b b a => n / 2  
     *  .       .
     */
    // If len even:
    /**
     * a b b b b a n / 2 - 1;  
     * .         .
     */
    str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let ptr_1 = 0;
    let ptr_2 = str.length - 1;
    console.log("haha: ", str);
    const halfLen = Math.floor(str.length / 2);
    while (ptr_1 <= halfLen) {
        if (str.charAt(ptr_1) !== str.charAt(ptr_2)) return false;
        ptr_1++;
        ptr_2--;

    }
    return true;
}

console.log(getValidPalindromeStatus('A man, a plan, a canal: Panama'));