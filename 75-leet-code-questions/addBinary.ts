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


console.log(addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
    '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'));