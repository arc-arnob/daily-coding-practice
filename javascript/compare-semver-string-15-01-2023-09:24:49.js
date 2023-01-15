/**
 * Please implement a function to compare 2 semver strings.

compare('12.1.0', '12.0.9')
// 1, meaning first one is greater

compare('12.1.0', '12.1.2')
// -1, meaning latter one is greater

compare('5.0.1', '5.0.1')
// 0, meaning they are equal.
 */
const STATUS = {
    INCOMPATIBLE: -9,
    NEWER: -1,
    OLDER: 1,
    SAME: 0
}

const compareSemVerString = (str1, str2) => {
    arr1 = str1.split('.').map(ele => parseInt(ele));
    arr2 = str2.split('.').map(ele => parseInt(ele));
    let sameFlag = STATUS.SAME;
    if (arr1.length !== arr2.length) {
        return STATUS.INCOMPATIBLE;
    }
    for (let idx in arr1) {
        if (arr1[idx] > arr2[idx]) {
            return STATUS.OLDER;
        }
        sameFlag += arr1[idx] ^ arr2[idx]
    }
    if (!sameFlag) return STATUS.SAME;
    return STATUS.NEWER;
}

console.log(compareSemVerString('0.1.100', '0.1.99'));