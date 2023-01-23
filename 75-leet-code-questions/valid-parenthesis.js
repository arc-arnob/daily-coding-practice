/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

// Stack operation
// Success:  If Stack is Empty
// Fail: if Stack is Not empty
// Fail: if Opening and closing tags do not match

const mapping = {
    '}': '{',
    ')': '(',
    ']': '['
}

const isValid = (str) => {
    const arr = str.split('');
    const stack = [];
    for (i in arr) {
        if (Object.values(mapping).includes(arr[i])) {
            stack.push(arr[i]);
        } else {
            const topEle = stack.pop();
            if (topEle !== mapping[arr[i]]) {
                return false;
            }
        }
    }
    if (!stack.length) return true;
    return false;
}

console.log(isValid("()[]{"))