/**
 * Here is a sequence:

    '1', first number is 1
    '11', since previous number has One(1) 1
    '21', since previous number has Two(2) 1s
    '1211', since previous number has One(1) 2 and One(1) 1
    '111221', since previous number has One(1) 1, One(1) 2, Two(2) 1s
    '312211', since previous number has Three(3) 1s, Two(2) 2s, One(1) 1
    ....

As explained above, the sequence is generated by counting the digits of previous number.

Please create getNthNum(n) to return the n-th number string in the sequence, n starts from 1.

 */

const getNthNum = (n) => { // 5
    let i = 1;
    let patCan = "1"
    while (i < n) {
        const uniqueCounts = getUniqueCounts(patCan); // Shall return an Object
        patCan = printFormattedInfo(uniqueCounts);
        i++;
    }
    return patCan
};
const getUniqueCounts = (str) => {
    const strArr = str.split('');
    let previousVal = strArr[0];
    let uniqueCounter = 0;
    const countMapping = strArr.reduce((acc, currVal) => {
        if (previousVal !== currVal) uniqueCounter += 1;
        if (acc[currVal + '_uni' + uniqueCounter] && previousVal === currVal) {
            acc[currVal + '_uni' + uniqueCounter].count += 1;

        } else {
            acc[currVal + '_uni' + uniqueCounter] = {
                value: currVal,
                count: 1
            }
        }
        previousVal = currVal;
        return acc;
    }, {})
    return countMapping;
}

const printFormattedInfo = (payload) => {
    const keysArray = Object.keys(payload);
    let result = "";
    for (let i in keysArray) {
        result += payload[keysArray[i]].count + '' + payload[keysArray[i]].value
    }
    return result
}

getNthNum(5);

getNthNum(1);