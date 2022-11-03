const factorial = (n) => {
    // Expectation: f(5): 5*4*3*2*1
    // Faith: f(4): 4*3*2*1
    // Mathematical Induction: f(5) = 5 + f(4)
    // Base case
    if(n === 0 ){
        // 0! = 1
        return 1;
    }
    // Recursion
    return n * factorial(n-1);
}

console.log(factorial(5));