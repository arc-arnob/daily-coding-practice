/**
* Given two non-negative integers num1 and num2 represented as strings,
*  return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger 
library or convert the inputs to integer directly.

https://leetcode.com/problems/multiply-strings/description/
*/


function multiply(num1: string, num2: string): string {
    // charCodeAt.
    let intNum1: number = 0;
    let intNum2: number = 0;
    for (let i: number = num1.length - 1; i >= 0; i--) {
        intNum1 = (num1[i].charCodeAt(0) - 48) * Math.pow(10, num1.length - 1 - i) + intNum1;
    }
    for (let i: number = num2.length - 1; i >= 0; i--) {
        intNum2 = (num2[i].charCodeAt(0) - 48) * Math.pow(10, num2.length - 1 - i) + intNum2;
    }
    console.log(intNum1, intNum2)
    return intNum1 * intNum2 + '';
};

console.log(multiply("123456781", "987654321"))