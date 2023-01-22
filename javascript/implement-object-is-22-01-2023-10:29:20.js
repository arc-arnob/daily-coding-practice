/**
 * Object.is() is similar to === except following cases

Object.is(0, -0) // false
0 === -0 // true

Object.is(NaN, NaN) // true
NaN === NaN // false
Here is the detailed spec, can you implement your own is()?
 */

function is(a, b) {
    if (a !== a) { // Only NaN is not equal to itself
        return b !== b; // returns true if the second parameter is NaN too
    }

    if (a === 0 && b === 0) { // -0 === 0 is true, so when both parameters equals to 0
        return 1 / a === 1 / b; // 1 / -0 is -Infinity and -Infinity === -Infinity
    }

    return a === b; // All other cases with regular === comparison
}