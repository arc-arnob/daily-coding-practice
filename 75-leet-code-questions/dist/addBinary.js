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
console.log(getNumberFromBinary(['1']));
console.log(getNumberFromBinary(['0']));
console.log(addBinary('1', '0'));
