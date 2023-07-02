const powerLinear = (x, n) => {
    if (n == 1) {
        return x;
    }
    return x * powerLinear(x, n - 1);
}

console.log(powerLinear(2, 2));