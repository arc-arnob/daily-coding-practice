/**
 * 
 * 
 * 
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters 
of a different word or phrase, 
typically using all the original letters exactly once.
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.

 */
const groupAnagrams = (arr, map = new Map()) => {
    if (!arr.length) return [];
    groupWords(arr, map);
    return [...map.values()];
}

const groupWords = (arr, map) => {
    for (const original of arr) {
        const sorted = reorder(original);
        const values = map.get(sorted) || [];
        values.push(original);
        map.set(sorted, values);
        console.log("Map: ", map);
    }
}
const reorder = (str) => str.split('')
    .sort((a, b) => a.localeCompare(b)).join('');

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));