// https://leetcode.com/problems/reverse-words-in-a-string/solutions/
/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
**/

function reverseWords(s: string): string {
    // return 
    let res = s.split(' ').filter(ele => ele !== '')
    return res.reverse().join(' ').trim();
};