/**
 * 
 * Given a non-empty string, return the most frequently ocurring character.

If there are multiple characters with same occurrance, return an array of them.

count('abbccc')
// 'c'

count('abbcccddd')
// ['c', 'd']

Follow-up: What is the time & space complexity of your approach?

 */

const mostFrequentlyOccuringCharacter = (str) => {
    // abbccc
    // b, c
    // Brute Force: Time: O(n), Space: o(n)
    const countMap = str.split('').reduce((acc, currentValue) => {
        if (acc[currentValue]) {
            acc[currentValue] += 1;
        } else {
            acc[currentValue] = 1
        }
        return acc;
    }, {})
    let maxCount = Number.MIN_VALUE;
    let maxCountArray = [];
    const keysArray = Object.keys(countMap);
    for (key in keysArray) {
        if (countMap[keysArray[key]] > maxCount) {
            maxCount = countMap[keysArray[key]];
            maxCountArray.pop();
            maxCountArray.push(keysArray[key]);
        } else if (countMap[keysArray[key]] === maxCount) {
            maxCountArray.push(keysArray[key]);
        }
    }
    return maxCountArray.length && maxCountArray.length > 1 ? maxCountArray : maxCountArray[0];
}

console.log(mostFrequentlyOccuringCharacter('abbcccfffooo'));