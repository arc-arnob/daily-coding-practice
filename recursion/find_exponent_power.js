const findRaisedToPower = (base, power) => { // 2, 5
    // Expectation: f(2, 5): 2 * 2 * 2 * 2 * 2;
    // Faith; f(2, 4): 2 * 2 * 2 * 2

    // Induction: f(5) : 2 * f(4)

    // Base Case;
    if(power === 1) { // 5
        return base;
    }
    return base * findRaisedToPower(base, power-1);
}

console.log(findRaisedToPower(2, 5));