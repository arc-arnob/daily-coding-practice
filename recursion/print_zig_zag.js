const printZigZag = (n) => {
    if (n == 1) {
        return '111';
    }
    return n + printZigZag(n - 1) + n + printZigZag(n - 1) + n;
}

console.log(printZigZag(2));