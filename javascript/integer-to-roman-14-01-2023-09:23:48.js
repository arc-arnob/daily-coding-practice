/**
 * Roman numerals are represented by combinations of following seven symbols, each with a fixed integer value.
Symbol 	I 	V 	X 	L 	C 	D 	M
Value 	1 	5 	10 	50 	100 	500 	1000

For Standard form, subtractive notation is used, meaning 4 is IV rather than IIII, 9 is IX rather than VIIII. Same rule applies to 40(XL) and 900(CM) .etc.

Simply speaking, the roman numerals in standard form follow these rules.

    symbols are listed from highest to lowest, from left to right
    from left to right, if the next symbol value is bigger than current one, it means subtracting, otherwise adding.

Please implement integerToRoman(). The input are all integers within valid range.


integerToRoman(123)
// 'CXXIII'

integerToRoman(1999)
// 'MCMXCIX'

integerToRoman(3420)
// 'MMMCDXX'

 */
const romanIntMapping = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
};
const integerToRoman = (intValue) => { // 1999
    let romanNumber = "";
    while (intValue > 0) {
        // Q
        const nearestNumber = findNearestNumber(intValue); // 1000 // 999
        console.log("nearest: ", nearestNumber);// 1000 // 500
        const quotient = intValue / nearestNumber; // 1999 / 1000 => 1 // 999 / 500 => 1
        intValue = intValue % nearestNumber; // 999 // 499
        console.log(nearestNumber, Math.floor(quotient), intValue);
        for (let i = 1; i <= Math.floor(quotient); i++) {
            romanNumber += romanIntMapping[nearestNumber]; // MD
        }
    }
    return romanNumber;
}
const findNearestNumber = (value) => {
    let nearestNum = 1000;
    const keysArray = Object.keys(romanIntMapping);
    for (idx in keysArray) {
        if (keysArray[idx] > value) {
            return nearestNum;
        }
        nearestNum = keysArray[idx];
    }
    return nearestNum
}

// console.log(findNearestNumber(999));

console.log(integerToRoman(1999));