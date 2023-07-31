function printPermutations(str: String, asf: String): void {
    if (str.length === 0) {
        console.log(asf);
        return;
    }
    for (let i = 0; i < str.length; i++) {
        const firstChar = str[i];
        const remainingString = str.substring(0, i) + str.substring(i + 1);
        printPermutations(remainingString, asf + firstChar);
    }
}

printPermutations('abcd', '');