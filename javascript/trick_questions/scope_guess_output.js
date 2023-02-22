// This is a JavaScript Quiz from BFE.dev

for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0)
}
// Since Var has global Scope, within web api its value will stay the same
// After setTimeout moves from macrotask queue, i will hold 4;
// Output: 5,5,5,5,5

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0)
}
// Since let has local Scope, within web api its value will reset with will loop?
// After setTimeout moves from macrotask queue, i will hold 4;

// output: 0,1,2,3,4


/**
 * var has a functional scope when declared in a function and otherwise is globally scoped. 
 * let has a block scope which means it is only existing within the block.
 */
