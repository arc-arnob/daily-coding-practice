/**
 * For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 */

function gcdOfStrings(str1: string, str2: string): string {
    // GCD Approach

    // SUCCESS
    // s1 = ABCABCABC, s2=ABCABC
    /**
    len1 = 9, len2 =6
    GCD = 3
    ABC * (9 - 3) === s1 and ABC * (6 - 3) === s2;
     */
    const sl1 = str1.length;
    const sl2 = str2.length;
    const gcdLen = gcd(sl1, sl2);
    const randomVal = str1.substring(0, gcdLen);
    console.log('Value: ', sl1, sl2, gcdLen);
    if (timesConcat(randomVal, Math.floor((sl1 - gcdLen) / gcdLen)) === str1
        && timesConcat(randomVal, Math.floor((sl2 - gcdLen) / gcdLen)) === str2) {
        return randomVal;
    }
    return '';
};
function gcd(num1: number, num2: number): number {
    if (num2 === 0) {
        return num1;
    } else {
        return gcd(num2, Math.floor(num1 % num2));
    }
}

function timesConcat(str: string, times: number): string {
    let result = str;
    for (let i = 0; i < times; i++) {
        result += str;
    }
    console.log(result, str, times);
    return result;
}







