const printDecreasing = (n, i) => {
    if( i > n ){
        return;
    }
    console.log(i);
    printDecreasing(n, i+1);
    console.log(i);
}

printDecreasing(5, 1);