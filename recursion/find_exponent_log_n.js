const findExponetialPower = (n, x) => {
    // Expectation: f(2,5): 2 * 2 * 2 * 2 * 2
    // Faith: f(2, 4): 2 * 2 * 2 * 2
    // 2**4 = 2**2 x 2**2 -> case 1
    // 2** 5 = 2**2 x 2**2 x 2 -> case 2
    // Base Case
    if(x === 0){
        return 1;
    }
    const half_powred = findExponetialPower(n, Math.floor(x / 2)); 
    const intermediate_value = half_powred * half_powred;
    // Case 1
    if(x % 2 === 0){
        return intermediate_value;
    }
    // Case 2
    return intermediate_value * n;

}

console.log(findExponetialPower(2, 5));