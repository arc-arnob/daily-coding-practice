/**
 * Object.is() is similar to === except following cases

Object.is(0, -0) // false
0 === -0 // true

Object.is(NaN, NaN) // true
NaN === NaN // false
Here is the detailed spec, can you implement your own is()?
 */