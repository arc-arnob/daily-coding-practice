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
        decimalNumber = parseInt(strArray[i]) * (Math.pow(2, strLen) - parseInt(i));
    }
    return decimalNumber;
};
var getBinaryStringFormNumber = function (value) {
    var binaryString = '';
    while (value) {
        var bit = value % 2 + '';
        value = Math.floor(value / 2);
        binaryString += bit;
    }
    return binaryString.split('').reverse().join('');
};
console.log(addBinary('1010', '1011'));
