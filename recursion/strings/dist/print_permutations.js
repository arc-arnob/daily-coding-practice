function printPermutations(str, asf) {
    if (str.length === 0) {
        console.log(asf);
        return;
    }
    for (var i = 0; i < str.length; i++) {
        var firstChar = str[i];
        var remainingString = str.substring(0, i) + str.substring(i + 1);
        printPermutations(remainingString, asf + firstChar);
    }
}
printPermutations('abcd', '');
