const printFibonnaci = (n) => {
    // 1 + 1 + 2 + 3 + 5 + 8 + 13 ...
    const arr = [];
    arr.push(0);
    arr.push(1);
     
    for(let i = 2; i<=n ; i++){
        arr[i] = arr[i-2] + arr[i-1]
    }
    console.log(arr[n]);

}

printFibonnaci(7);