/**
 * Given a string contaning only a, b and c, remove all b and ac.
 * removeChars('ab') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') // 'caa'
 */

const removeAllBAndAC = (str) => {
    // Regex
    if (!str) {
        return str;
    }
    if (!str.includes('b') && !str.includes('ac')) {
        return str;
    }
    const pattern = /b|(ac)/g;
    const res = str.replace(pattern, "");
    const result = removeAllBAndAC(res);
    return result;
};

console.log(removeAllBAndAC("abc"));

