const printEncodings = (originalString, encodings) => {

    // Print Encoding
    /**       a b c  l  c  a  w 
     * 123 -> 1 2 3; 12 3; 1 23;
     */
    // 1(23)a                                       12(3)    
    // 2(3)ab        23()a w                          3() l c
    // 3a b c            

    // abc, aw, lc

    // Base Case:
    if(originalString.length == 0){
        console.log(encodings);
        return;
    }
    if(originalString.length > 0){
        if(originalString[0] == 0) return;
    }
    // Two Recursion calls:
    // 1. with 1 character
    // 2. with first 2 characters

    // With 1 character
    const charAtFirstLenOne = originalString.substring(0,1);
    const remainingOriginalString = originalString.substring(1);
    // Convert charAtFirstLenOne to alphabet
    // 1 -> 'a' + (1 - 1) = a
    // 2 -> 'a' + (2 - 1) = b
    const alphabeticalCodeR1 = String.fromCharCode(97 + (parseInt(charAtFirstLenOne) - 1));
    printEncodings(remainingOriginalString, encodings + alphabeticalCodeR1);

    // With first two letters
    const charAtFirstLenTwo = originalString.substring(0,2);
    const remainingOriginalStringR2 = originalString.substring(2);
    const alphabeticalCodeR2 =  String.fromCharCode(97 + (parseInt(charAtFirstLenTwo) - 1));
    if(parseInt(charAtFirstLenTwo) <= 26) printEncodings(remainingOriginalStringR2, encodings + alphabeticalCodeR2);

}   

printEncodings("12103", "");