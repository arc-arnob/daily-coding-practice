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
    groupWords(arr, map); // Time: O(M * O(N * log(N))) | Space:  O(M * N)
    return [...map.values()]; //  Time: O(M) | Space: O(M * N)
}

const groupWords = (arr, map) => {
    for (const original of arr) { // Time: O(M)
        const sorted = reorder(original); // Time: O(N * log(N)) | Space: O(N)
        const values = map.get(sorted) || []; // Time: ?
        values.push(original); // Time: ?? | Space: O(M)
        map.set(sorted, values); // Tinme: | Space: O(M * N)
    }
}
const reorder = (str) =>
    str.split('') // Time O(N) | Space O(N)
        .sort((a, b) => a.localeCompare(b)) // Time O(N * log(N)) | Space O(1 || log(K))
        .join(''); // Time O(N) | Space O(N)

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));