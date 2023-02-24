/**
 * You are given a large integer represented as an integer array digits, 
 * where each digits[i] is the ith digit of the integer. 
 * The digits are ordered from most significant to least significant 
 * in left-to-right order. 
 * The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 * https://leetcode.com/problems/plus-one/
 */

function plusOne(digits: number[]): number[] {
    let carry = 1;
    for(let i:number = digits.length - 1; i >= 0; i--){
        let ittrSum = digits[i] + carry;
        if(ittrSum >= 10){
            carry = 1;
            digits[i] = ittrSum % 10;
            if(i === 0){
                digits.unshift(1);
            }
        }else{
            digits[i] = ittrSum;
            carry = 0;
            break;
        }
    }
    return digits;
};

console.log(plusOne([9]));