/**
* Given two non-negative integers num1 and num2 represented as strings,
*  return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger 
library or convert the inputs to integer directly.

https://leetcode.com/problems/multiply-strings/description/
*/


function multiply(num1: string, num2: string): string {
    // charCodeAt.
    num1.split('').map(ele => ele.charCodeAt(0) - 48)
};