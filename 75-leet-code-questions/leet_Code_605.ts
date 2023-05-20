/**
 * https://leetcode.com/problems/can-place-flowers/editorial/?envType=study-plan-v2&id=leetcode-75
 * You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 */

function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    // [1, 0, 0, 0, 1]
    //        1

    // [1, 0, 0, 0, 1]
    //     x  x  x 

    // plants more than the slots -> false

    let prevState = 0;
    let nextState = 0;
    // O(N)
    for (let i = 0; i < flowerbed.length; i++) { // 0 1
        if (n === 0) break;
        // Plot empty check
        if (flowerbed[i]) continue; // return F
        // Start check
        if (i === 0) {
            // Check next state and place
            nextState = flowerbed[i + 1];
        }

        // Normal Cases
        if (i > 0) prevState = flowerbed[i - 1]; // 1
        if (i < flowerbed.length - 1) nextState = flowerbed[i + 1]; // 0
        if (!(prevState || nextState)) { // false
            flowerbed[i] = 1;
            n -= 1;
        }
    }
    return n <= 0;
};