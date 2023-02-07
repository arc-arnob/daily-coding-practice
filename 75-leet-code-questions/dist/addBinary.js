function addBinary(a, b) {
    return (getBinaryStringFormNumber(getNumberFromBinary(a.split('')) + getNumberFromBinary(b.split(''))));
}
;
var getNumberFromBinary = function (strArray) {
    var strLen = strArray.length;
    if (strLen === 1) {
        return parseInt(strArray[0]);
    }
    var decimalNumber = 0;
    for (var i in strArray) {
        decimalNumber += parseInt(strArray[i]) * (Math.pow(2, ((strLen - 1) - parseInt(i))));
    }
    console.log("A: ", decimalNumber);
    return decimalNumber;
};
var getBinaryStringFormNumber = function (value) {
    if (value === 1)
        return '1';
    if (value === 0)
        return '0';
    var binaryString = '';
    while (value) {
        var bit = value % 2 + '';
        value = Math.floor(value / 2);
        binaryString += bit;
    }
    return binaryString.split('').reverse().join('');
};
// console.log(getNumberFromBinary(['1']))
// console.log(getNumberFromBinary(['0']))
console.log(addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'));
