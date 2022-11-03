const printDecreasing = (n) => {
    if( n === 0 ){
        return;
    }
    console.log(n);
    printDecreasing(n-1);
    console.log(n);
}

printDecreasing(5);