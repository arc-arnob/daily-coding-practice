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

const printKPC = (str, ans) => {
    if(str.length === 0) {
        console.log(ans);
        return;
    }
    let firstChar = str[0];
    let remainingChars = str.substring(1);
    for(i in keypad[parseInt(firstChar)]){
        printKPC(remainingChars, ans + keypad[firstChar][i]);
    }
}

printKPC("678", '');