function addBinary(a: string, b: string): string {
    return (getBinaryStringFormNumber(
        getNumberFromBinary(a.split('')) + getNumberFromBinary(b.split(''))
    ))
};

const getNumberFromBinary = (strArray: string[]): number => {
    const strLen = strArray.length;
    if (strLen === 1) {
        return parseInt(strArray[0]);
    }
    let decimalNumber: number = 0;
    for (let i in strArray) {
        decimalNumber += parseInt(strArray[i]) * (2 ** ((strLen - 1) - parseInt(i)));
    }
    return decimalNumber;
}

const getBinaryStringFormNumber = (value: number): string => {
    if (value === 1) return '1';
    if (value === 0) return '0';
    let binaryString = '';
    while (value) {
        const bit: string = value % 2 + '';
        value = Math.floor(value / 2);
        binaryString += bit;
    }
    return binaryString.split('').reverse().join('');
}

console.log(getNumberFromBinary(['1']))
console.log(getNumberFromBinary(['0']))


console.log(addBinary('1', '0'));