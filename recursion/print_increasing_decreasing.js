const printDecreasing = (n, i) => {
    if (i > n) {
        return;
    }
    console.log(i);
    printDecreasing(n, i + 1);
    console.log(i);
}

const printIncDecOneArg = (n) => {
    if (n == 0) {
        return;
    }
    console.log(n);
    printIncDecOneArg(n - 1);
    console.log(n);
}

// printDecreasing(5, 1);

printIncDecOneArg(5);