/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

 */

const validAnagrams = (s, t) => { // abba , bbaa
    if (s.length !== t.length) return false;
    const map = {};
    const tMap = {};
    for (let char of s) {
        if (map[char]) map[char] += 1;
        else map[char] = 1;
    }
    for (let char of t) {
        if (tMap[char]) tMap[char] += 1;
        else tMap[char] = 1;
        if (!map[char] || tMap[char] > map[char]) return false;
    }
    return true;

}

console.log(validAnagrams('abba', 'bbaa'));