const keypad = [
    '.;', //0
    'abc', // 1
    'def', // 2
    'ghi', // 3
    'jkl', // 4
    'mno', // 5
    'pqrs', // 6
    'tu', // 7
    'vwx', //8
    'yz' // 9
];
const getKpc = (str) => {
    /**
     * get all possible combination from a keypad press of given numbers
     */
    // Base Case
    if(!str){
        return [""];
    }
    console.log("STR: ", str)
    const first_char = str[0];
    const remaining_str = str.substring(1);
    const recursion_result = getKpc(remaining_str);
    const result = [];
    // For each character in str, form the combination...
    // '7' -> 7
    for(i in keypad[parseInt(first_char)]){ // tv
        for(j in recursion_result){
            result.push(keypad[parseInt(first_char)][i] + recursion_result[j]);
        }
    }
    return result;

}

console.log("Get Result: ", getKpc("0"));