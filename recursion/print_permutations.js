const printPermutation = (originalString, permutedStrings) => {
    // abc -> abc, bca, ...
    if(originalString.length === 0){
        console.log(permutedStrings);
        return;
    }
    for(let i = 0; i<originalString.length; i++){
        const firstChar = originalString[i];
        const remainingString =originalString.substring(0, i) + originalString.substring(i + 1);
        printPermutation(remainingString, permutedStrings + firstChar);
    }

}

printPermutation("abc", "");