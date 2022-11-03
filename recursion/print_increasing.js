const printDecreasing = (n) => {
    if(n === 0 ){
        return;
    }
    printDecreasing(n-1);
    console.log(n);
}

printDecreasing(5);